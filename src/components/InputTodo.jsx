import React from 'react';

const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
};

export const InputTodo = (props) => {
    const {todoText, onChangeTodoText, onClickAdd} = props;
    return (
        <div style={style} className={"input-area"}>
            <input placeholder={"input TODO"} value={todoText} onChange={onChangeTodoText}/>
            <button onClick={onClickAdd}>add</button>
        </div>
    );
};