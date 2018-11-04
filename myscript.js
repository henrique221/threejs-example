let power = function(x, y) {
    let res = 1;
    for(let i = 1; i <= y; i++) {
        res *= x;
    };
    return res;
}
