import React from "react";
import sprite from '../../../assets/images/icon-sprite.svg';

const Icon = ({ name, modifier }) => {
    return (
        <svg className={'icon '+ (modifier ?? '')}>
            <use href={ sprite + `#${name}`} />
        </svg>
    )
}

export default Icon;