import React, {useState} from 'react';
import Header from "./components/Header/Header";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import NoteContent from "./components/NoteContent/NoteContent";
import classes from "./assets/styles/Notes.module.css";
import NoteTools from "./components/NoteTools/NoteTools";

function Notes() {
    const [notes, setNotes] = useState(getNotesFromLS());
    const [currentNote, setCurrentNote] = useState({});

    function getNotesFromLS() {
        return JSON.parse(localStorage.getItem('notes')) ?? [];
    }

    function changeNotesList(note) {
        const updateNotes = getNotesFromLS();
        updateNotes.push(note);

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
        e.preventDefault();
        const clickedItemID = Number(e.target.parentElement.getAttribute('data-id'));
        console.log(clickedItemID);
    }

    console.log(currentNote)

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
                { Object.keys(currentNote).length ? <NoteTools/> : '' }
                <NoteContent noteToShow={currentNote}/>
            </main>
        </div>
    </div>
    );
}

export default Notes;
