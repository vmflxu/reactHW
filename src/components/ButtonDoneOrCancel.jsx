function ButtonDoneOrCancel({ elId, data, setData, type }) {

    const refreshElementId = (arr) => {
        return arr.map((elem, idx) => {
            elem.id = idx;
            return elem;
        });
    }

    const clickDoneOrCancelButtonHandler = (index, type) => {
        const temp = data.map((elem) => {
            if (elem.id === index) {
                type === 'done' ? elem.isWorking = false : elem.isWorking = true;
            }
            return elem;
        });
        setData(refreshElementId(temp));
    }

    if (type === 'done') {
        return <button className='done-or-cancel' onClick={() => clickDoneOrCancelButtonHandler(elId, 'done')}>완료</button>;
    } else {
        return <button className='done-or-cancel' onClick={() => clickDoneOrCancelButtonHandler(elId, 'cancel')}>취소</button>;
    }
}


export default ButtonDoneOrCancel;