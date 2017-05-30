module.exports = {
    sum: (val1, val2) => {
        return val1 + val2;
    },
    product: (val1, val2) => {
        return val1 * val2;
    },
    square: (val) => {
        return val * val;
    },
    random: (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};