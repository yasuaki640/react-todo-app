import React, {useState} from "react";
import "./styles.css";
import {InputTodo} from "./components/InputTodo";
import {IncompleteTodos} from "./components/IncompleteTodos"
import {CompleteTodos} from "./components/CompleteTodos";

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

    const onClickReturn = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    };

    return (
        <>
            <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd}/>
            <IncompleteTodos todos={incompleteTodos} onClickDelete={onClickDelete} onClickComplete={onClickComplete}/>
            <CompleteTodos todos={completeTodos} onClickReturn={onClickReturn}/>
        </>
    );
}
