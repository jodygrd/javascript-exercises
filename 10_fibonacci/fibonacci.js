const fibonacci = function(place) {
    place = parseInt(place);
    if(place < 0){
        return "OOPS"
    }
    let num1 = 0
    let num2 = 1
    let sum = 1
    for (let i = 1; i < place; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
