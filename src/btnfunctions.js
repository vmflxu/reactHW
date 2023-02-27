const refreshElementId = (arr) => {
    return arr.map((elem, idx) => {
        elem.id = idx;
        return elem;
    });
}