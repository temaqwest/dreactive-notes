import React, {useState} from 'react';
import classes from './NoteTools.module.css';
import Button from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";

const NoteTools = ({onAction}) => {
    const [tools] = useState([
        { id: 1, name: 'H1', description: 'Заголовок первого уровня' },
        { id: 2, name: 'H2', description: 'Заголовок второго уровня' },
        { id: 3, name: 'H3', description: 'Заголовок третьего уровня' },
        { id: 4, name: 'P', description: 'Параграф' },
        { id: 5, name: 'Ul', iconID: 'ullist', description: 'Список с маркерами' },
        { id: 6, name: 'Ol', iconID: 'ollist', description: 'Пронумерованный список' },
    ]);

    return (
        <div className={classes.note__tools}>
            {
                tools.map((tool) => {
                    return (
                        <Button
                            type="button"
                            key={tool.id}
                            onClick={onAction.bind(tool.name.toLowerCase())}
                            title={tool.description}
                            data-name={tool.name}
                            modifier={classes.note__tool}
                        >
                            {
                                tool.iconID ?
                                    <Icon name={tool.iconID}/> :
                                    tool.name
                            }
                        </Button>
                    )
                })
            }
        </div>
    );
};

export default NoteTools;