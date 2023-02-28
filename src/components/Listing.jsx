import Box from "./Box";

export default function Listing({todoList, setTodoList, boardName}) {
    const isWorking = (boardName === 'Done') ? false : true;

    return todoList
        .filter((element) => element.isWorking === isWorking)
        .map((element) => {
            console.log("Listing에서",element);
            return (
                <Box
                    todoList={todoList}
                    element={element}
                    setTodoList={setTodoList}
                    type={boardName}
                />
            );
        });
}