import Board from "./Board";

export default function Contents({entireData, entireFunctions}) {
    const todoList = entireData.todoList;
    const setTodoList = entireFunctions.setTodoList;

    return (
        <div className='contents'>
            <Board todoList={todoList} setTodoList={setTodoList} boardName={"Todo"}/>
            <div className='blank'></div>
            <Board todoList={todoList} setTodoList={setTodoList} boardName={"Done"}/>
        </div>
    );
};