function getOddSum(array) {
    console.log(array);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + array[i];
        console.log(array[i], i, sum);

    }
    return sum;
}

function getOnlyOdd(array) {
    for (let index = 0; index < array.length; index++) {
        const num = index;
        const element = array[index];
        if (element % 2 !== 0) {
            console.log(array[index], num);
        }


    }
}
const allNumbers = [13, 21, 57, 46, 65, 67, 63, 61, 71]
getOnlyOdd(allNumbers)
getOddSum(allNumbers)