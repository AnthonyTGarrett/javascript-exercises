const sumAll = function(first, second) {

    if(first < 0 || second < 0)
        return 'ERROR'

    if(typeof first != 'number' || typeof second != 'number')
        return 'ERROR'
        
    let sum = 0;

    let low = Math.min(first,second)
    let high = Math.max(first,second)

    for(let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
