import React from "react";

const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
};

export const CompleteTodos = (props) => {
    const {todos, onClickReturn} = props;
    return (
        <div style={style} className={"complete-area"}>
            <p className={"title"}>DONE</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo} className={"list-row"}>
                            <li>{todo}</li>
                            <button onClick={() => {
                                onClickReturn(index)
                            }}>return
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

