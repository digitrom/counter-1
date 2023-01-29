import React from 'react';
import s from './Button.module.css'

type DisplayPropsType = {
    count: number
}

const Display = (props: DisplayPropsType) => {
    const color = props.count === 5 ? "red" : "black"
    return (
        <div className={s.counter}  style={{color:color}}>{props.count}</div>
    );
};

export default Display;