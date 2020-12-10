import React, {useState} from "react";
import "./styles.css";

export default function App() {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState(['い稲！', '胃尉根！']);
    const [completeTodos, setCompleteTodos] = useState(['医委寝！', '飯田！']);

    const onChangeTodoText = event => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === '') return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText('');
    };

    return (
        <>
            <div className={"input-area"}>
                <input placeholder={"input TODO"} value={todoText} onChange={onChangeTodoText}/>
                <button onClick={onClickAdd}>add</button>
            </div>
            <div className={"incomplete-area"}>
                <p className={"title"}>UNDONE</p>
                <ul>
                    {incompleteTodos.map(todo => {
                        return (
                            <div key={todo} className={"list-row"}>
                                <li>{todo}</li>
                                <button>complete</button>
                                <button>delete</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
            <div className={"complete-area"}>
                <p className={"title"}>DONE</p>
                <ul>
                    {completeTodos.map(todo => {
                        return (
                            <div key={todo} className={"list-row"}>
                                <li>{todo}</li>
                                <button>return</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
