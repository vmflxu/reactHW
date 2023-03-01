import { BiArrowFromBottom, BiX, BiCheck } from "react-icons/bi";

export default function Button({ type, onClick }) {
    const factor = {
        cssClass : '',
        btnName : '',
    }

    switch (type) {
        case 'Todo':
            factor.cssClass = 'todo-done';
            factor.btnName = <BiCheck size={'20'} />;
            break;
        case 'Done':
            factor.cssClass = 'done-todo';
            factor.btnName = <BiArrowFromBottom size={'20'} />;
            break;
        case 'Add':
            factor.cssClass = 'add';
            factor.btnName = 'Submit';
            break;
        default:
            factor.cssClass = 'erase';
            factor.btnName = <BiX size={'20'} />;
            break;
    }
    // console.log(factor);
    // console.log(onClick); 
    return <button className={factor.cssClass} onClick={onClick}>{factor.btnName}</button>;
}