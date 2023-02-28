import Header from "./Header";
import Contents from "./Contents";
import { useState } from 'react';

export default function Send() {
    const [todoList, setTodoList] = useState([]);
    const [title, setTitle] = useState("");
    const [memo, setMemo] = useState("");

    const entireData = {
        todoList,
        title,
        memo,
    }
    const entireFunctions = {
        setTodoList,
        setTitle,
        setMemo,
    }

    return (
        <div className="main">
            <Header
                entireData={entireData}
                entireFunctions={entireFunctions}
            />
            <Contents
                entireData={entireData}
                entireFunctions={entireFunctions}
            />
        </div>
    );
};