function TodoBox({ element }) {
    return (
        <div key={element.id} className="list-box">
            <h3>{element.title}</h3>
            <h5>{element.memo}</h5>
            <div className="btnSpace">
                <ButtonErase elId={element.id} />
                <ButtonDone elId={element.id} />
            </div>
        </div>
    );
}
export default TodoBox;