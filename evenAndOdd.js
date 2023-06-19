function IsEven(Num) {
    const OddOrEven = Num % 2;

    if (OddOrEven === 0) {
        return true

    }
    else {
        return false;
    }
}
const Result = IsEven(289)
console.log(Result);

