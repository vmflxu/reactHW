const clickEraseButtonHandler = (index) => {
    console.log(todoList[index], index);
    const temp = todoList.filter((elem, idx) => idx !== index);
    setTodoList(refreshElementId(temp));
}

const clickDoneButtonHandler = (index) => {
    console.log(`id는 ${index}`);
    const temp2 = todoList.map((elem) => {
        if (elem.id === index) {
            elem.isWorking = false;
            console.log(elem.id, elem.isWorking);
        }
        return elem;
    });
    console.log(temp2);
    setTodoList(refreshElementId(temp2));
}
const refreshElementId = (arr) => {
    return arr.map((elem, idx) => {
        elem.id = idx;
        return elem;
    });
}

const ButtonErase = ({ elId }) => {
    return <button className='erase' onClick={() => clickEraseButtonHandler(elId)}>삭제</button>;
}
const ButtonDone = ({ elId }) => {
    return <button className='done' onClick={() => clickDoneButtonHandler(elId)}>완료</button>;
}

export default Buttons;