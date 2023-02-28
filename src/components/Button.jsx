export default function Button({ type, onClick }) {
    const factor = {
        cssClass : '',
        btnName : '',
    }

    switch (type) {
        case 'Todo':
            factor.cssClass = 'done-or-cancel';
            factor.btnName = '완료';
            break;
        case 'Done':
            factor.cssClass = 'done-or-cancel';
            factor.btnName = '취소';
            break;
        case 'Add':
            factor.cssClass = 'add';
            factor.btnName = '추가하기';
            break;
        default:
            factor.cssClass = 'erase';
            factor.btnName = '삭제';
            break;
    }
    // console.log(factor);
    // console.log(onClick);
    return <button className={factor.cssClass} onClick={onClick}>{factor.btnName}</button>;
}