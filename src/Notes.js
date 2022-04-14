import React, {useState} from 'react';
import Header from "./components/Header/Header";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import NoteContent from "./components/NoteContent/NoteContent";
import classes from "./assets/styles/Notes.module.css";

function Notes() {
    const [notes, setNotes] = useState(getNotesFromLS());
    const [currentNote, setCurrentNote] = useState({});

    function getNotesFromLS() {
        return JSON.parse(localStorage.getItem('notes')) ?? [];
    }

    function changeNotesList(note, flag) {
        let updateNotes = getNotesFromLS();

        if (!flag) {
            updateNotes = updateNotes.filter((upNote) => upNote.id !== note.id);
            setCurrentNote({});
        } else {
            updateNotes.push(note);
        }

        setNotes([...updateNotes])
        return localStorage.setItem('notes', JSON.stringify(updateNotes));
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

    return (
    <div className={classes.notes}>
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
                <NoteContent noteToShow={currentNote} contentChange={changeNote}/>
            </main>
        </div>
    </div>
    );
}

export default Notes;
