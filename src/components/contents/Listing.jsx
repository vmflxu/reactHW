import Box from "./Box";

export default function Listing({todoList, setTodoList, boardName}) {
    const isWorking = (boardName === 'Done') ? false : true;

    return todoList
        .map((element,index) => {
            if(element.isWorking === isWorking){
                return (
                    <Box
                        key = {index}
                        todoList={todoList}
                        element={element}
                        setTodoList={setTodoList}
                        type={boardName}
                    />
                );
            } else {
                return;
            }
        });
}