import '../btnfunctions.js';

function ButtonErase({ elId, data, setData }) {
  const refreshElementId = (arr) => {
    return arr.map((elem, idx) => {
        elem.id = idx;
        return elem;
    });
}

const clickEraseButtonHandler = (id) => {
    const temp = data.filter((elem, idx) => idx !== id);
    setData(refreshElementId(temp));
  }
  return <button className='erase' onClick={() => clickEraseButtonHandler(elId)}>삭제</button>;
}


export default ButtonErase;