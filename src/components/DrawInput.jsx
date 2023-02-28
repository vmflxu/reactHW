export default function DrawInput({ target, category, setFunc }) {
    const text = category === "title" ? "제목" : "내용";
    const cssClass = text === "내용" ? {width: "500px"} : {};
    return (
        <div>
            <span>{text}</span>
            <input style={cssClass} value={target} onChange={(e)=>setFunc(e.target.value)} />
        </div>
    );
}