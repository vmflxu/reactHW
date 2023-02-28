export default function DrawInput({target, category, setFunc}) {
    return category === "title" ?
    (
        <div><span>제목</span><input value={target} onChange={(e) => {
            setFunc(e.target.value);
        }} /></div>
    ) :
    (
        <div><span>내용</span><input value={target} className='input-memo' onChange={(e) => {
            setFunc(e.target.value);
        }} /></div>
    );
}