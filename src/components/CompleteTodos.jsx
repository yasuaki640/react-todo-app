import React from "react";

export const CompleteTodos = (props)=>{
    const {todos, onClickReturn} = props;
    return (
        <div className={"complete-area"}>
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

