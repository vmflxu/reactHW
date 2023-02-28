import Header from "./Header";
import Contents from "./Contents";
import { useState } from 'react';

export default function Send() {
    const [todoList, setTodoList] = useState([{
        id: 0,
        title : "기본",
        memo : "메모",
        isWorking : false,
    }]);

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