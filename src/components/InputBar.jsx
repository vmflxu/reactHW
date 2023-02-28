import { useState } from "react";
import DrawInput from "./DrawInput";
import Button from "./Button";
// import { inputChangeHandler } from "../btnfunctions";

export default function InputBar({ todoList, setTodoList }) {
    const [title, setTitle] = useState('');
    const [memo, setMemo] = useState('');

    const addBtnHandler = () => {
        const addedList = {
            id: todoList.length,
            title: title,
            memo: memo,
            isWorking: true,
        };
        setTodoList([...todoList, addedList]);
        setTitle('');
        setMemo('');
    }

    return (
        <>
            <div>
                <DrawInput target={title} category={"title"} setFunc={setTitle} />
                <DrawInput target={memo} category={"memo"} setFunc={setMemo} />
            </div>

            <div>
                <Button type={'Add'} onClick={addBtnHandler} />
            </div>

        </>
    );
};

