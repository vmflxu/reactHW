//함수는 import 해서 사용
import { refreshElementId } from '../btnfunctions';

function ButtonErase({ elId, data, setData }) {
  //재생성 되지 않는 함수는 굳이 memolization 할 필요 없음
  //컴포넌트 안에 선언할꺼면 굳이 함수에 parameter 받을 필요 없음
  const clickEraseButtonHandler = () => {
    const temp = data.filter((elem, idx) => idx !== elId);
    setData(refreshElementId(temp));
  }

  return (
    <button
      className='erase'
      onClick={clickEraseButtonHandler}>삭제
    </button>
  )
}

export default ButtonErase;
