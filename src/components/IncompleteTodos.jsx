import React from 'react';

const style = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
    const {todos, onClickComplete, onClickDelete} = props;
    return (
        <div style={style} className={"incomplete-area"}>
            <p className={"title"}>UNDONE</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo} className={"list-row"}>
                            <li>{todo}</li>
                            <button onClick={() => onClickComplete(index)}>complete</button>
                            <button onClick={() => onClickDelete(index)}>delete</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};