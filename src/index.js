module.exports = function reverse (number) {
    if (number >= 0) {
        number = number + "";
        return number.split("").reverse().join("");
    } else {
        number = -number + "";
        return number.split("").reverse().join("");
    }
}