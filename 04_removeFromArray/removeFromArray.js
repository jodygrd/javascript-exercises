const removeFromArray = function(array, ...args) {
    
    //iterate over the old array
    for (let i = 0; i < array.length; i++){
        //check all the arguments
        for (arg of args) {
            if (array[i] == arg){
              array.splice(i, 1);
              i--
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
