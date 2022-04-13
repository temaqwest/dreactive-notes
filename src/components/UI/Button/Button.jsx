import React from "react";

const Button = ({ children, modifier, type, ...props }) => {

    function getClassNames() {
        let classes = '';

        switch (type) {
            case 'fab':
                classes = 'button fab';
                break;
            case 'text':
                classes = 'button text';
                break;
            case 'tile':
                classes = 'button tile';
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