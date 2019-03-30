function  check(str, start) {
    str = str.split('').reverse().join('');
    start = start.split('').reverse().join('');


    let equal=true;

    for (let i = 0; i < start.length; i++) {
        if(str[i]!==start[i]){
            equal=false;
        }


    }
    console.log(equal)


}
check("This sentence ends with fun?","fun?")