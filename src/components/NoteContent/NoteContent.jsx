import React from 'react';
import classes from "./NoteContent.module.css";
import Icon from "../UI/Icon/Icon";


const NoteContent = ({noteToShow}) => {
        function render() {
            if (isEmpty()) {
                return (
                    <div className={classes.notFound}>
                        <Icon name="select"/>
                        <h1 className={classes.notFound__title}>
                            Выберите заметку или создайте новую
                        </h1>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h1> {noteToShow.title} </h1>
                        <p> {noteToShow.content} </p>
                    </div>
                )
            }
        }

        function isEmpty() {
            return Object.keys(noteToShow).length === 0;
        }

        return (
            <div className={classes.note}>
                { render() }
            </div>
        );
}

export default NoteContent;