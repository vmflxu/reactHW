import Header from "./header/Header";
import Contents from "./contents/Contents";
import { useState } from 'react';
import { sampleData } from "../sampledata";


export default function Send() {
    const [todoList, setTodoList] = useState([...sampleData]);

    return (
        <div className="main">
            <Header
                todoList={todoList}
                setTodoList={setTodoList}
            />
            <Contents
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </div>
    );
};