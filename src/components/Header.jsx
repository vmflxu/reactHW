import InputBar from "./InputBar";


export default function Header({ todoList, setTodoList }) {

    return (
        <header>
            <InputBar
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </header>
    );

}
