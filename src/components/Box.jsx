import ButtonErase from "./ButtonErase";
import ButtonDoneOrCancel from "./ButtonDoneOrCancel";


function Box({ element, data, setData, type }) {
    if (type === "todo") {
        return (
            <div key={element.id} className="list-box">
                <h3>{element.title}</h3>
                <h5>{element.memo}</h5>
                <div className="btnSpace">
                    <ButtonErase elId={element.id} data={data} setData={setData} />
                    <ButtonDoneOrCancel elId={element.id} data={data} setData={setData} type="done" />
                </div>
            </div>
        );
    } else {
        return (
            <div key={element.id} className="list-box">
                <h3>{element.title}</h3>
                <h5>{element.memo}</h5>
                <div className="btnSpace">
                    <ButtonErase elId={element.id} data={data} setData={setData} />
                    <ButtonDoneOrCancel elId={element.id} data={data} setData={setData} type="cancel" />
                </div>
            </div>
        );
    }
}


export default Box;