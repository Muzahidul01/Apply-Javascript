function multiOfNum(Num) {
    let result = 1;
    for (let i = 1; i <= 7; i++) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}
multiOfNum();
