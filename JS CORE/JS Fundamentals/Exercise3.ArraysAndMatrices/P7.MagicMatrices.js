function result(input) {
    let magic = input.reduce((a,b) => a + b);

    for (let i in input) {
        let row = input[i].reduce((a, b) => a + b);
        let col = input.map(x = x[i]).reduce((a, b) => a + b);

        if ((row !== magic)  (col !== magic)) {
            return false;
        }
    }
    return true;
}
result([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)