import { addBtnHandler } from "../btnfunctions";

export default function DrawBtnAdd({ entireData, entireFunctions }) {

    return (
        <div>
            <button onClick={(e) => addBtnHandler(e, entireData,entireFunctions)}
            >추가하기</button>
        </div>
    );
}