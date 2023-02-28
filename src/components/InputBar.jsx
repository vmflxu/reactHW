import DrawInput from "./DrawInput";
import DrawBtnAdd from "./DrawBtnAdd";

export default function InputBar({ entireData, entireFunctions }) {
    const {todoList, title, memo} = entireData;
    const {setTodoList, setTitle, setMemo} = entireFunctions;
    
    return (
        <div>
            <DrawInput target={title} category={"title"} setFunc={setTitle} />
            <DrawInput target={memo} category={"memo"} setFunc={setMemo} />
            <DrawBtnAdd entireData={entireData} entireFunctions={entireFunctions} />
        </div>
    );
};

