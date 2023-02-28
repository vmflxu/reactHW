export default function Button({ todoList, element, setTodoList, type }) {
    let text = '';
    let cssClass = '';
    let onClickHandler;
    const refreshElementId = (arr) => {
        return arr.map((elem, index) => {
            return { ...elem, id: index };
        });
    }

    const clickEraseBtnHandler = (id) => {
        const temp = todoList.filter((elem, index) => index !== id);
        setTodoList(refreshElementId(temp));
    }

    const clickOtherwiseBtnHandler = (id, type) => {
        const temp = todoList.map((elem) => {
            if (elem.id === id) {
                type === 'Done'
                    ? elem.isWorking = false
                    : elem.isWorking = true;
            }
            return elem;
        });
        setTodoList(refreshElementId(temp));
    }

    switch (type) {
        case 'Todo':
            text = '완료';
            cssClass = 'done-or-cancel';
            onClickHandler = clickOtherwiseBtnHandler(element.id, type);
            break;
        case 'Done':
            text = '취소';
            cssClass = 'done-or-cancel';
            onClickHandler = clickOtherwiseBtnHandler(element.id, type);
            break;
        default:
            text = '삭제';
            cssClass = 'erase';
            onClickHandler = clickEraseBtnHandler(element.id);
            break;
    }

    return (
        <button
            className={cssClass}
            onClick={() => onClickHandler}
        >{text}</button>
    );

}