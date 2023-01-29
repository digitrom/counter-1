import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import Display from "./Display";
import s from './Button.module.css'

function App() {

    const [count, setCount] = useState<number>(0)
    const buttonTitle_1: string = "Increment"
    const buttonTitle_2: string = "Reset"

    const increment = () => {
        count < 5 && setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className={s.counter}>
            <div>
                <Display count={count}/>
                <Button title={buttonTitle_1} callBack={increment}/>
                <Button title={buttonTitle_2} callBack={reset}/>
            </div>
        </div>
    );
}

export default App;
