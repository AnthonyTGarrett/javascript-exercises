const palindromes = function (str) {
    let original = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    let reverse = str
                    .toLowerCase()
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "")
                    .split('')
                    .reverse()
                    .join('');

    return reverse === original;
};

// Do not edit below this line
module.exports = palindromes;
