function IsLeapYear(Year) {
    const SoLeapYear = Year % 4;
    if (SoLeapYear === 0) {
        return true;
    }
    else if (Year % 400 === 0) {

    }
    else { return false }

}
const EnterYear = 2100;
const Answer = IsLeapYear(EnterYear);
console.log(Answer);

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

var q = isLeapYear(2100);
console.log(q);
isLeapYear(2021);   // Returns false
isLeapYear(2400);   // Returns true