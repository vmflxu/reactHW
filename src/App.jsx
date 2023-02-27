import './App.css';
import Box from './components/Box.jsx'
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

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
          {
            todoList
              .filter((element) => element.isWorking === true)
              .map((element) => {
                return <Box element={element} data={todoList} setData={setTodoList} type="todo" />;
              })
          }
        </div>

        <h2>Done..!🎉</h2>
        <div className="list">
          {
            todoList
              .filter((element) => element.isWorking === false)
              .map((element) => {
                return <Box element={element} data={todoList} setData={setTodoList} type="done" />;
              })
          }
        </div>
      </div>
    </div >
  );
}

export default App;
