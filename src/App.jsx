import './App.css';
import { useState } from 'react';
import Contents from './components/Contents.jsx';


function App() {
  const [todoList, setTodoList] = useState([{
    id: 0,
    title: "첫번째",
    memo: "메모내용",
    isWorking: true,
  },
  {
    id: 1,
    title: "두번째",
    memo: "메모내용 두번째입니다.",
    isWorking: false,
  },
  {
    id: 2,
    title: "세번째",
    memo: "메모내용 세번째입니다.",
    isWorking: true,
  }]);
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");


  const ButtonErase = ({ elId }) => {
    return <button className='erase' onClick={()=>clickEraseButtonHandler(elId)}>삭제</button>;
  }
  const ButtonDone = ({ elId }) => {
    return <button className='done' onClick={()=>clickDoneButtonHandler(elId)}>완료</button>;
  }

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
    return arr.map((elem,idx) => {
      elem.id = idx;
      return elem;
    });
  }

  return (
    <div className="main">
      <header>
        <div>
          <div>제목&nbsp;&nbsp;<input value={title} onChange={(e) => {
            setTitle(e.target.value);
          }} /></div>
          <div>내용&nbsp;&nbsp;<input value={memo} className='input-memo' onChange={(e) => {
            setMemo(e.target.value);
          }} /></div>
        </div>
        <div>
          <button onClick={() => {
            const newList = {
              id: todoList.length + 1,
              title: title,
              memo: memo,
              isWorking: true,
            };
            setTodoList([...todoList, newList]);
            setTitle('');
            setMemo('');
          }}>추가하기</button>
        </div>
      </header>
      <div className="contents">
        <h2>Working..🔥</h2>
        <div className="list">
          <Contents arr={todoList} target="todo" />
        </div>

        <h2>Done..!🎉</h2>
        <div className="list">
          <Contents arr={todoList} target="done" />
        </div>
      </div>
    </div >
  );
}

export default App;
