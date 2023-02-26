import './App.css';
import { useState } from 'react';

function TodoBox({ element }) {
  return (
    <div key="" className="list-box">
      <h3>{element.title}</h3>
      <h5>{element.memo}</h5>
      <div className="btnSpace">
      <button className='erase'>삭제</button>
      <button className='done'>완료</button>
      </div>
      
    </div>
  );
}

function App() {
  const [todoList, setTodoList] = useState([{
    id: 1,
    title: "첫번째",
    memo: "메모내용",
    isDone: false,
  },
  {
    id: 2,
    title: "두번째",
    memo: "메모내용 두번째입니다.",
    isDone: true,
  },
  {
    id: 3,
    title: "세번째",
    memo: "메모내용 세번째입니다.",
    isDone: false,
  }]);
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  return (
    <div className="main">
      <header>
        <div>
          <div>제목&nbsp;&nbsp;<input onChange={(e) => {
            setTitle(e.target.value);
          }} /></div>
          <div>내용&nbsp;&nbsp;<input className='input-memo' onChange={(e) => {
            setMemo(e.target.value);
          }} /></div>
        </div>
        <div>
          <button onClick={() => {
            const newList = {
              id: todoList.length + 1,
              title: title,
              memo: memo,
              isDone: false,
            };
            setTodoList([...todoList, newList]);
          }}>추가하기</button>
        </div>
      </header>
      <div className="contents">
        <h2>Working..🔥</h2>
        <div className="list">
          {
            todoList
              .filter((element) => element.isDone === true)
              .map((element) => {
                return <TodoBox element={element} />;
              })
          }
        </div>

        <h2>Done..!🎉</h2>
        <div className="list">
          {
            todoList
              .filter((element) => element.isDone === false)
              .map((element) => {
                return <TodoBox element={element} />;
              })
          }
        </div>
      </div>
    </div >
  );
}

export default App;
