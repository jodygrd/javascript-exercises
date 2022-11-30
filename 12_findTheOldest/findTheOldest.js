const findTheOldest = function(array) {
    let sortedByOldest = array.sort((a, b)=> {
        let ageA = a.yearOfDeath - a.yearofBirth
        let ageB = b.yearOfDeath - b.yearofBirth
        return ageB - ageA;

    })
    return sortedByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
