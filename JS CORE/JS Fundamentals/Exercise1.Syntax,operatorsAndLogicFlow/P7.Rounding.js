function solve(input) {
    let number=input[0];
    let fix=input[1];
    if(fix>=15){
        fix=15;
    }
    number=number.toFixed(fix)

    console.log(Number(number))
}