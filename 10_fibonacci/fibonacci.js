const fibonacci = function(term) {
    term = parseInt(term)
    if(term < 0) return 'OOPS'
    if(term <= 1) return term;

    return fibonacci(term - 1) + fibonacci(term - 2);
};

// Do not edit below this line
module.exports = fibonacci;
