export default function DrawInput({ target, category, setFunc }) {
    const text = category === "title" ? "Title" : "Memo";
    const cssClass = text === "Memo" ? {maxWidth: "500px",width:"50vw"} : {};

    return (
        <div className="input-group">
            <span className="input-title">{text}</span>
            <input style={cssClass} value={target} onChange={(e)=>setFunc(e.target.value)} />
        </div>
    );
}