function solve(input){
    let speedFirst=input[0];
    let speedSecond=input[1];
    let time =input[2];
    let hours=time/60/60;
    let firstDis=speedFirst*hours;
    let secondDis=speedSecond*hours;
    console.log(Math.abs(firstDis-secondDis)*1000);



}
solve([0, 60, 3600])