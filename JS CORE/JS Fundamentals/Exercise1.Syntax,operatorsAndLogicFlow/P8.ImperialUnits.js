function solve(inches) {
    let foot = 0;

    while (inches >= 12){
        inches -=  12;
    foot++;}
    console.log(foot+`'-`+inches+`"`);
}
solve(36)