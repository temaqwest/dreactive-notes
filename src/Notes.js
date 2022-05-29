import React, {useState} from 'react';
import Header from "./components/Header/Header";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import NoteContent from "./components/NoteContent/NoteContent";
import classes from "./assets/styles/Notes.module.css";
import OnBoarding from "./components/OnBoarding/OnBoarding";
import NoteTools from "./components/NoteTools/NoteTools";

function Notes() {
    const [notes, setNotes] = useState(getDataFromLS('notes'));
    const [currentNote, setCurrentNote] = useState({});
    const [onBoardingStatus, setOnBoardingStatus] = useState(false);

    function checkOnBoardingStatus(status) {
        setOnBoardingStatus(status);
        return status;
    }

    function setDataToLS(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    function getDataFromLS(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    function changeNotesList(note, flag) {
        let updateNotes = getDataFromLS("notes") ?? [];

        if (!flag) {
            updateNotes = updateNotes.filter((upNote) => upNote.id !== note.id);
            setCurrentNote({});
        } else {
            updateNotes.push(note);
        }

        setNotes([...updateNotes])
        return localStorage.setItem('notes', JSON.stringify(updateNotes));
    }

    function saveChanges() {
        setDataToLS('notes', notes);
    }

    function openNote(e) {
        const clickedItemID = Number(e.target.getAttribute('data-id'));
        const note = notes.find(i => i.id === clickedItemID);
        setCurrentNote(note);
    }

    function deleteNote(e) {
        e.stopPropagation();
        const clickedItemID = Number(e.target.parentElement.getAttribute('data-id'));
        changeNotesList({ id: clickedItemID}, false);
    }

    function changeNote(e) {
        const currentNoteID = e.target.parentElement.getAttribute('data-id');
        const currentNote = notes.find((note) => note.id === +currentNoteID);
        const changeType = e.target.getAttribute('name');

        changeType === 'title' ?
            currentNote.title = e.target.value :
            currentNote.content = e.target.value;

        setNotes(notes.map((note) => {
            return note.id === currentNoteID ? currentNote : note;
        }));
    }
    
    function onNoteTools() {
        console.log(this)
    }

    return (
        <div className={classes.notes}>
            {getDataFromLS('onBoarding') || onBoardingStatus ? '' : <OnBoarding status={checkOnBoardingStatus}/>}
            <Header/>
            <div className={classes.notes__wrapper}>
                <AsideMenu
                    onNoteClick={openNote}
                    onNotesUpdate={changeNotesList}
                    onNoteDelete={deleteNote}
                    notes={notes}
                    currentNote={currentNote.id}
                />
                <main className={classes.notes__main}>
                    { Object.keys(currentNote).length ? <NoteTools onAction={onNoteTools}/> : '' }
                    <NoteContent noteToShow={currentNote} contentChange={changeNote} onContentSave={saveChanges}/>
                </main>
            </div>
        </div>
    );
}

export default Notes;
