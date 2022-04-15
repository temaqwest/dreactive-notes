import React from 'react';
import classes from './Toast.module.css'
import Icon from "../Icon/Icon";

const Toast = ({type, message, active}) => {

    return (
        <div className={
            active ?
                `${classes.toast} ${classes.active}` :
                `${classes.toast}`
        }>
            <Icon name="success" alt="success" modifier={classes.success_icon}/>
            <span className={classes.toast__title}>{message}</span>
        </div>
    );
};

export default Toast;