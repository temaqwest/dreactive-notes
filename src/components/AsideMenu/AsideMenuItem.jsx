import React from 'react';
import classes from "./AsideMenu.module.css";
import Button from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";

const AsideMenuItem = ({title, content, date, id, isClicked, isDeleted, active}) => {

    return (
        <li onClick={isClicked} className={classes.menu__itemContainer}>
            <div
                data-id={id}
                className={
                    active === id ?
                        `${classes.menu__item} ${classes.active}` :
                        `${classes.menu__item}`
            }>
                <Button
                    onClick={isDeleted}
                    type="button"
                    mode="deleteNote"
                    modifier={classes.deleteNoteBtn}
                    tabIndex="-1"
                >
                    <Icon name="deleteNote"/>
                </Button>
                <h2 className={classes.menu__title}> { title } </h2>
                <span className={classes.menu__contents}> { content } </span>
                <span className={classes.menu__date}> { date } </span>
            </div>
        </li>
    );
}

export default AsideMenuItem;