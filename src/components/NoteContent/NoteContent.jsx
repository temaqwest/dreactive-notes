import React, {useState} from 'react';
import classes from "./NoteContent.module.css";
import Toast from "../UI/Toast/Toast";

const NoteContent = ({noteToShow, contentChange, onContentSave}) => {
    const [control, setControl] = useState(false);
    const [onSave, setOnSave] = useState(false);

    const notFound = (
        <div className={classes.notFound}>
            <svg className={classes.animatedCursor} id="animatedCursor" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48.5 157.625H24.25C21.0352 157.622 17.9531 156.343 15.6799 154.07C13.4067 151.797
                            12.1282 148.715 12.125 145.5V121.25H24.25V145.5H48.5V157.625ZM12.125 72.75H24.25V97H12.125V72.75ZM157.625
                            48.5H145.5V24.25H121.25V12.125H145.5C148.715 12.1282 151.797 13.4067 154.07 15.6799C156.343 17.9531
                            157.622 21.0352 157.625 24.25V48.5ZM72.75 12.125H97V24.25H72.75V12.125ZM24.25 48.5H12.125V24.25C12.1282
                            21.0352 13.4067 17.9531 15.6799 15.6799C17.9531 13.4067 21.0352 12.1282 24.25 12.125H48.5V24.25H24.25V48.5ZM163.687
                            194C162.891 194.001 162.103 193.844 161.367 193.539C160.632 193.235 159.964 192.787 159.401 192.224L122.19
                            155.012L102.044 185.24C101.406 186.197 100.508 186.953 99.4557 187.419C98.4035 187.885 97.2404 188.042 96.1023
                            187.872C94.9642 187.702 93.8981 187.211 93.0286 186.457C92.1591 185.703 91.5221 184.717 91.1921 183.615L54.8171
                            62.3649C54.5029 61.3166 54.4784 60.2027 54.746 59.1415C55.0137 58.0804 55.5637 57.1114 56.3376 56.3376C57.1114 55.5637
                            58.0804 55.0137 59.1415 54.746C60.2027 54.4784 61.3166 54.5029 62.3649 54.8171L183.615 91.1921C184.717 91.5221 185.703
                            92.1591 186.457 93.0286C187.211 93.8981 187.702 94.9642 187.872 96.1023C188.042 97.2404 187.885 98.4035 187.419
                            99.4557C186.953 100.508 186.197 101.406 185.24 102.044L155.012 122.19L192.224 159.401C193.36 160.538 193.999 162.08
                            193.999 163.688C193.999 165.295 193.36 166.837 192.224 167.974L167.974 192.224C167.411 192.787 166.743 193.235 166.008
                            193.539C165.272 193.844 164.484 194.001 163.687 194ZM163.687 179.365L179.365 163.688L135.988 120.31L167.792 99.1037L69.6702
                            69.6702L99.1037 167.792L120.31 135.988L163.687 179.365Z" strokeDasharray="1517.474609375" strokeDashoffset="0" stroke="currentColor"
                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                >
                    <animate
                        id="p1"
                        attributeName="stroke-dashoffset"
                        begin="animatedCursor.load"
                        values="1517.474609375; 0"
                        dur="10s"
                        repeatCount="1"
                        fill="freeze"
                        calcMode="paced"
                    >
                    </animate>
                </path>
            </svg>
            <h1 className={classes.notFoundTitle}>
                Выберите заметку или создайте новую
            </h1>
        </div>
    );

    const textContent = (
        <div className={classes.note__contentEditable} data-id={noteToShow.id}>
            <span className={classes.contentDatetime}>{noteToShow.date} </span>
            <input
                name="title"
                type="text"
                className={classes.contentTitle}
                onChange={contentChange}
                value={noteToShow.title}
                maxLength="82"
                minLength="1"
                placeholder="Title"
            />
            <textarea
                name="paragraph"
                placeholder="Text content"
                className={classes.contentParagraph}
                onChange={
                    (el) => {
                        contentChange(el);
                        expandableTextArea(el);
                    }
                }
                value={noteToShow.content}
            />
        </div>
    );

    const expandableTextArea = (el) => {
        el.target.style.height = el.target.scrollHeight + 'px';
    };

    function isEmpty() {
        return Object.keys(noteToShow).length === 0;
    }

    function handleSaveShortcut(e) {
        if (e.keyCode === 17) setControl(true);

        if (e.keyCode === 83 && control) {
            e.preventDefault();

            setOnSave(true);
            onContentSave();
            setTimeout(() => setOnSave(false), 3000);
        }
    }

    function checkCtrl(e) {
        if (e.keyCode === 17)
            setControl(false);
    }

    return (
        <div
            className={classes.note}
            onKeyDown={handleSaveShortcut}
            onKeyUp={checkCtrl}
        >
            {
                isEmpty() ? notFound : textContent
            }
            <Toast message="Ваша заметка сохранена!" active={onSave}/>
        </div>
    );
}

export default NoteContent;