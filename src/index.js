module.exports = function reverse(n) {
    let i = 0;
    let result = '';
    let str = String(n);
    if (n < 0) {
        str = String(n * -1);
    } else {
        str = String(n);
    }
    while (i < str.length) {
        result = `${str[i]}${result}`;
        i = i + 1;
    }
        return result;
    }