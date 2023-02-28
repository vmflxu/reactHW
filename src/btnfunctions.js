export const titleChangeHandler = (e, call) => {
    call(e.target.value);
}

export const addBtnHandler = (e, dataObj, funcObj) => {
    const { todoList, title, memo } = dataObj;
    const { setTodoList, setTitle, setMemo } = funcObj;

    const newList = {
        id: todoList.length + 1,
        title: title,
        memo: memo,
        isWorking: true,
    };
    setTodoList([...todoList, newList]);
    setTitle('');
    setMemo('');
}