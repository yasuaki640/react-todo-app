import React from 'react';

export const InputTodo = (props) => {
    const {todoText, onChangeTodoText, onClickAdd} = props;
    return (
        <div className={"input-area"}>
            <input placeholder={"input TODO"} value={todoText} onChange={onChangeTodoText}/>
            <button onClick={onClickAdd}>add</button>
        </div>
    );
};