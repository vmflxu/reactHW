import Button from "./Button";

export default function ButtonSpace({ todoList, element, setTodoList, type }) {
    return (
        <div className="btnSpace">
            <Button
                todoList={todoList}
                element={element}
                setTodoList={setTodoList}
                type={'Erase'}
            />
            <Button
                todoList={todoList}
                element={element}
                setTodoList={setTodoList}
                type={type}
            />
        </div>
    );
}