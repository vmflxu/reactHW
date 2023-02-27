import TodoBox from './TodoBox.jsx';
import DoneBox from './DoneBox.jsx';

const clickEraseButtonHandler = (index, arr) => {
    console.log(arr[index], index);
    const temp = arr.filter((elem, idx) => idx !== index);
    setTodoList(refreshElementId(temp));
}

const clickDoneButtonHandler = (index, arr) => {
    console.log(`id는 ${index}`);
    const temp2 = arr.map((elem) => {
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


function Contents({ arr, target }) {
    if (target === "todo") {
        const result = arr
            .filter((element) => element.isWorking === true)
            .map((element) => {
                return <TodoBox element={element} />;
            });
        return result();
    } else {
        const result = arr
            .filter((element) => element.isWorking === false)
            .map((element) => {
                return <DoneBox element={element} />;
            });
        return result();
    }
}


export default Contents;