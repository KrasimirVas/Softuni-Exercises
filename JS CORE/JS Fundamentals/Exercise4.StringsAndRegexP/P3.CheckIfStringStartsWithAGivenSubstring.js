function  check(str, start) {

    let equal=true
    for (let i = 0; i < start.length; i++) {
        if(str[i]!==start[i]){
            equal=false;
        }


    }
    console.log(equal)


}
check("The quick brown fox…","The quick brown fox…")