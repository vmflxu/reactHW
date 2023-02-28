import Listing from "./Listing";

export default function Board({ todoList, setTodoList, boardName }) {

    const textRest = 'List >>';

    return (
        <div className="board">
            <span className="part-title">{`${boardName} ${textRest}`}</span>
            <div className="list">
                {/* <Test /> */}
                <Listing
                    todoList={todoList}
                    setTodoList={setTodoList}
                    boardName={boardName}
                />
            </div>
        </div>
    );
}