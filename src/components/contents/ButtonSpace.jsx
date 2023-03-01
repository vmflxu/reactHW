import Button from "../Button";


export default function ButtonSpace({ todoList, element, setTodoList, type }) {

    const refreshElementId = (arr) => {
        return arr.map((elem, idx) => {
            elem.id = idx;
            return elem;
        });
    }

    const eraseBtnHandler = () => {
        const temp = todoList
            .filter((elem) => elem.id !== element.id);

        setTodoList(refreshElementId(temp));
    }

    const otherwiseBtnHandler = () => {
        const temp = todoList.map((elem) => {
            if (elem.id === element.id) {
                type === 'Done' ? elem.isWorking = true : elem.isWorking = false;
            }
            return elem;
        });
        setTodoList(refreshElementId(temp));
    }

    return (
        <>
            <Button
                type={'erase'}
                onClick={eraseBtnHandler}
            />
            <Button
                type={type}
                onClick={otherwiseBtnHandler}
            />
        </>
    );
}