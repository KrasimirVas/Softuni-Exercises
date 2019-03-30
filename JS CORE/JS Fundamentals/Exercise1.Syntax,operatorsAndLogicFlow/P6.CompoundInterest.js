function solve(input) {
    let sum=input[0];
    let interest=input[1]/100;
    let comPeriod=input[2];
    let years=input[3];
    let freq=12/comPeriod;

    console.log((sum*Math.pow((1+interest/freq),freq*years)).toFixed(2));

}
solve([1500, 4.3, 3, 6])