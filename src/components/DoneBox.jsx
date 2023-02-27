function DoneBox({ element }) {
    const ButtonErase = ({ elId }) => {
        return <button className='erase' onClick={() => clickEraseButtonHandler(elId)}>삭제</button>;
    };

    return (
        <div key={element.id} className="list-box">
            <h3>{element.title}</h3>
            <h5>{element.memo}</h5>
            <div className="btnSpace">
                <ButtonErase elId={element.id} />
            </div>
        </div>
    );
}

export default DoneBox;