import Listing from "./Listing";

export default function Board({ todoList, setTodoList, boardName }) {

    const textRest = 'List';
    const style = { border : '2px solid darkslategray'};
    const spanStyle = { backgroundColor : 'darkslategray'};

    return (
        <div className="board" style={style}>
            <span className="part-title" style={spanStyle}>
                {`${boardName} ${textRest}`}</span>
            <div className="list">
                <Listing
                    todoList={todoList}
                    setTodoList={setTodoList}
                    boardName={boardName}
                />
            </div>
        </div>
    );
}