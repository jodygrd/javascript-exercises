const palindromes = function (string) {
    let s = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let newString = s.replace(/\s/g,"");
    let array = newString.toLowerCase().split("")
    for (let i = 0; i < array.length/2; i++) {
        if (array[i] != array[array.length - i - 1]){
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
