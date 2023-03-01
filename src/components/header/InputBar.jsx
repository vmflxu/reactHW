import { useState } from "react";
import DrawInput from "./DrawInput";
import Button from "../Button";
// import { inputChangeHandler } from "../btnfunctions";

export default function InputBar({ todoList, setTodoList }) {
    const [title, setTitle] = useState('');
    const [memo, setMemo] = useState('');


    const addBtnHandler = (e) => {
        const addedList = {
            id: todoList.length,
            title: title,
            memo: memo,
            isWorking: true,
        };

        if (title !== '' || memo !== '') {
            setTodoList([...todoList, addedList]);
        }        

        setTitle('');
        setMemo('');
    }

    return (
        <>
            <div className="input-box">
                <DrawInput target={title} category={"title"} setFunc={setTitle} />
                <DrawInput target={memo} category={"memo"} setFunc={setMemo} />
            </div>

            <div className="input-box">
                <Button type={'Add'} onClick={addBtnHandler} />
            </div>

        </>
    );
};

