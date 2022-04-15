import React from "react";
import Icon from "../Icon/Icon";

const Button = ({ children, modifier, mode, icon, iconModifier, ...props }) => {

    function insertIcon() {
        return (
          <div className="button__content">
              <span className="button__text">{children}</span>
              <Icon name={icon} modifier={iconModifier}/>
          </div>
        );
    }

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
            {
                icon ? insertIcon() : children
            }
        </button>
    )
}

export default Button;