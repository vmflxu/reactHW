import BoxTitle from "./BoxTitle";
import BoxMemo from "./BoxMemo";
import ButtonSpace from "./ButtonSpace";

export default function Box({ todoList, element, setTodoList, type }) {

    return (
        <div key={element.id} className="list-box bg-todo">
            <BoxTitle title={element.title} />
            <BoxMemo memo={element.memo} />
            <ButtonSpace todoList={todoList} element={element} setTodoList={setTodoList} type={type} />
        </div>
    );
}