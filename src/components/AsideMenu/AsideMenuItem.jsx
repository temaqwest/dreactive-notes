import React from 'react';
import classes from "./AsideMenu.module.css";

const AsideMenuItem = ({title, content, date, id, isClicked, active}) => {
        return (
            <li onClick={isClicked} className={classes.menu__itemContainer}>
                <div
                    data-id={id}
                    className={
                        active === id ?
                            `${classes.menu__item} ${classes.active}` :
                            `${classes.menu__item}`
                    }>
                    <h2 className={classes.menu__title}> { title } </h2>
                    <span className={classes.menu__contents}> { content } </span>
                    <span className={classes.menu__date}> { date } </span>
                </div>
            </li>
        );
}

export default AsideMenuItem;