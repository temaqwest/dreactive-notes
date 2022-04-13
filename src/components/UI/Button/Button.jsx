import React from "react";

const Button = ({ children, modifier, mode, ...props }) => {

    function getClassNames() {
        let classes = '';

        switch (mode) {
            case 'fab':
                classes = 'button fab';
                break;
            case 'text':
                classes = 'button text';
                break;
            case 'tile':
                classes = 'button tile';
                break;
            case 'deleteNote':
                classes = 'button deleteNote';
                break;
            default:
                break;
        }

        return `${classes} ${modifier ?? ''}`;
    }

    return (
        <button {...props} className={getClassNames()}>
            { children }
        </button>
    )
}

export default Button;