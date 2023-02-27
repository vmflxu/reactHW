import './App.css';
import Box from './components/Box.jsx'
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const addTodo = () => {
    const newList = {
      id: todoList.length + 1,
      title: title,
      memo: memo,
      isWorking: true,
    };
    setTodoList([...todoList, newList]);
    setTitle('');
    setMemo('');
  };

  const renderBox = (element, type) => {
    return <Box element={element} data={todoList} setData={setTodoList} type={type} />;
  };

  return (
    <div className="main">
      <header>
        <div>
          {/* &nbsp 보다 마진으로 처리해야함 */}
          <div>
            <span
              style={{
                marginRight: '10px',
              }}
            >제목</span>
            <input value={title} onChange={handleTitleChange} /></div>
          <div>
            <span
              style={{
                marginRight: '10px',
              }}
            >내용</span>
            <input value={memo} className='input-memo' onChange={handleMemoChange} /></div>
        </div>
        <div>
          <button onClick={addTodo}>추가하기</button>
        </div>
      </header>
      <div className="contents">
        <h2>Working..🔥</h2>
        <div className="list">
          {
            todoList
              .filter((element) => element.isWorking === true)
              .map((element) => renderBox(element, "todo"))
          }
        </div>

        <h2>Done..!🎉</h2>
        <div className="list">
          {
            todoList
              .filter((element) => element.isWorking === false)
              .map((element) => renderBox(element, "done"))
          }
        </div>
      </div>
    </div >
  );
}

export default App;
