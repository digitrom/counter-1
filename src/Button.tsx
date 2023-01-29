import React, {FC} from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void

}

export const Button: FC<ButtonPropsType> = (props) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

