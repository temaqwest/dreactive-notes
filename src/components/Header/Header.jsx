import React from 'react';
import classes from "./Header.module.css";
import logotype from "../../assets/images/logo.png";
import Clock from "../UI/Сlock/Clock";

const Header = () => {
        return (
            <header className={classes.header}>
                <div className={classes.logoBlock}>
                    <img className={classes.logo} alt="Логотип" src={logotype}/>
                    <span className={classes.logoTitle}>Блокнот</span>
                </div>
                <Clock/>
            </header>
        );
}

export default Header;