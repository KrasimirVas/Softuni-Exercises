function solve(input) {

    let degree=input*0.9;

    while(degree<0 || degree>=360){
        if(degree<0){
            degree=360-Math.abs(degree);

        }else{
            degree=degree-360;
        }

    }
    console.log(degree)
}
solve(100)