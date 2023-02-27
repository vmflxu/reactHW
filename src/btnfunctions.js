//export 해줘야 외부에서 import 해서 사용 가능

export const refreshElementId = (arr) => {
    return arr.map((elem, idx) => {
        elem.id = idx;
        return elem;
    });
}