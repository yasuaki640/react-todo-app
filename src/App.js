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

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    const onClickComplete = (index) => {
        const newInCompleteTodos = [...incompleteTodos];
        newInCompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newInCompleteTodos);
        setCompleteTodos(newCompleteTodos);
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
                    {incompleteTodos.map((todo, index) => {
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
