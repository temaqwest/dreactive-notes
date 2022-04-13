import React, {useState} from 'react';
import Header from "./components/Header/Header";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import NoteContent from "./components/NoteContent/NoteContent";

function Notes() {
    const [notes, setNotes] = useState(getNotesFromLS());
    const [currentNote, setCurrentNote] = useState({});

    function getNotesFromLS() {
        return JSON.parse(localStorage.getItem('notes')) ?? [];
    }

    function setNotesToLS(note) {
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

    return (
    <div className="notes">
        <Header/>
        <div className="notes__wrapper">
            <AsideMenu onNoteClick={openNote} onNotesUpdate={setNotesToLS} notes={notes} currentNote={currentNote.id}/>
            <main className="notes__main">
                <NoteContent noteToShow={currentNote}/>
            </main>
        </div>
    </div>
    );
}

export default Notes;
