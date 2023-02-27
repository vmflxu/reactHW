//표현을 간단히 하고 반복되지 않게 수정

//export default 는 이렇게 선언도 가능
export default function ButtonDoneOrCancel({ elId, data, setData, type }) {

    const refreshElementId = (arr) => {
        return arr.map((elem, idx) => {
            return {...elem, id: idx};
        });
    }

    const clickDoneOrCancelButtonHandler = (index, type) => {
        const temp = data.map((elem) => {
            if (elem.id === index) {
                elem.isWorking = type === 'done' ? false : true;
            }
            return elem;
        });
        setData(refreshElementId(temp));
    }

    const buttonText = type === 'done' ? '완료' : '취소';

    return <button className='done-or-cancel' onClick={() => clickDoneOrCancelButtonHandler(elId, type)}>{buttonText}</button>;
}

