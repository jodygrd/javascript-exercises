const removeFromArray = function(array, ...args) {
    let newArray = [];
    //iterate over the old array
    for (element of array){
        if (!args.includes(element)){
            newArray.push(element);
        }
    }
        
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
