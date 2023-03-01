import Header from "./header/Header";
import Contents from "./contents/Contents";
import { useState } from 'react';


export default function Send() {
        const sampleData = [{
            id: 0,
            title : "React state 좀 더 제대로 파악",
            memo : "잘못 사용하다가 무한렌더링 두번 발생함",
            isWorking : false,
        },
        {
            id: 1,
            title : "id 겹침 현상 트러블슈팅",
            memo : "배열 length를 사용한 id 채번 시, 삭제/추가에 따라 id가 겹치는 현상",
            isWorking : false,
        },
        {
            id: 2,
            title : "애니메이션 트러블슈팅",
            memo : "개별 포스트잇이 생성/소멸될때 애니메이션을 넣으면, ,id 겹침 해결방안때문에 또 이게 상관없는 놈들도 리렌더링되고 애니메이션 적용됨",
            isWorking : true,
        },
        {
            id: 3,
            title : "이것 만드는 과정에 있었던 일들 TIL 작성",
            memo : "너무 귀찮음",
            isWorking : true,
        },
        {
            id: 4,
            title : "기본 모양새가 어떻게 나오는지 확인",
            memo : "그냥 확인하면 됨",
            isWorking : false,
        },
        {
            id: 5,
            title : "유저 데이터 입력이 없을 시, 버튼 온클릭이 작동 안하기",
            memo : "input에 disable로 처리를 할지, 그냥 실행을 안할지 선택하여 구현",
            isWorking : false,
        },
        {
            id: 6,
            title : "오늘 저녁은 대체 뭘 먹지",
            memo : "이게 지금 제일 급함",
            isWorking : true,
        },
    ];
    const [todoList, setTodoList] = useState([...sampleData]);

    return (
        <div className="main">
            <Header
                todoList={todoList}
                setTodoList={setTodoList}
            />
            <Contents
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </div>
    );
};