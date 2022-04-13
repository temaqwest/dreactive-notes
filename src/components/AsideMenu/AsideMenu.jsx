import React from 'react';
import classes from "./AsideMenu.module.css";
import AsideMenuItem from "./AsideMenuItem";
import Button from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";

/*
Ты думаешь что не можешь ничего бросить и изменить потому,
что боишься, что что-то изменится и сделать всё как надо.
Если ты выполнишь это, то что будешь делать дальше? Придётся
изменять свои глоабльные цели и жить новыми проблемами, к
решению которых ты даже не знаешь как подступиться.

Поэтому, по-братски, заебашь эти проблемы, стань круче
и ахуей от новых проблем, которые нужно будет решить.
Жизнь видимо из этого и состоит ¯\_(ツ)_/¯
*/

/*
To any component
...
...
function render() {
    ...if
    ...do
    ...smth or not
    return (...)
}
return render();
*/



const AsideMenu = ({notes, onNotesUpdate, onNoteClick, onNoteDelete, currentNote, ...props}) => {
        const parentNodes = notes;

        function getCurrentDateTime() {
            return `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
        }

        function addNewNote() {
            const notesLen = parentNodes.length;

            const newObj = {
                id: (notesLen + 1),
                title: 'Untitled' + (notesLen + 1),
                content: 'Text content',
                date: getCurrentDateTime(),
            };

            return onNotesUpdate(newObj)
        }

        return (
            <aside className={classes.menu}>
                <ul className={classes.menu__list}>
                    {
                        parentNodes.map((note) => {
                            return (
                                <AsideMenuItem
                                    isClicked={onNoteClick}
                                    isDeleted={onNoteDelete}
                                    key={note.id}
                                    id={note.id}
                                    title={note.title}
                                    content={note.content}
                                    date={note.date}
                                    active={currentNote}
                                />
                            )
                        })
                    }
                </ul>

                <Button onClick={addNewNote} mode="fab" modifier={classes.menu__create} title="Создать заметку">
                    <Icon name='add'/>
                </Button>
            </aside>
        );
}

export default AsideMenu;