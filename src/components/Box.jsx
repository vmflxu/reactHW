import ButtonErase from "./ButtonErase";
import ButtonDoneOrCancel from "./ButtonDoneOrCancel";

// 논리를 구분하여 코드를 단순화할 수 있음

export default function Box({ element, data, setData, type }) {
    const typeToBtnType = {
        todo: "done",
        cancel: "cancel",
    };
    const { id, title, memo } = element;
    const btnType = typeToBtnType[type];

    return (
        <div key={id} className="list-box">
            <h3>{title}</h3>
            <h5>{memo}</h5>
            <div className="btnSpace">
                <ButtonErase elId={id} data={data} setData={setData} />
                <ButtonDoneOrCancel elId={id} data={data} setData={setData} type={btnType} />
            </div>
        </div>
    );
}
