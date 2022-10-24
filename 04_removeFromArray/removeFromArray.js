const removeFromArray = function(...args) {

    let arr = args.shift();

    args.forEach(el => {
        if(arr.indexOf(el) != -1){
            arr.splice(arr.indexOf(el),1);
        }
        
    })
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
