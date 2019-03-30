function solve(input) {
    let delimiter=input[1]

    let allfirms=input[0].split(delimiter)
    let firstComp=allfirms[0];
    let secondComp=allfirms[1];
    let thirdComp=allfirms[2];
    let valid=[]
    let invalid=[]
    let counterValid=1;
    let counterInvalid=1;
    valid[0]=`ValidSentences`
    invalid[0]=`InvalidSentences`


    for (let i = 2; i < input.length; i++) {
        currentRow=input[i].toLowerCase()
        if((currentRow.includes(firstComp))&& (currentRow.includes(secondComp))&& (currentRow.includes(thirdComp))){
            valid.push(`${counterValid}. ${currentRow}`)
            counterValid++;



        }else{
            invalid.push(`${counterInvalid}. ${currentRow}`)
            counterInvalid++

        }

    }
    if(valid.length>1&&invalid.length>1){
        valid.push(`==============================`)
        for (let obj of valid) {
            console.log(obj);
        }
    }
    else if(valid.length>1&&invalid.length<=1){
        for (let obj of valid) {
            console.log(obj);
        }
    }

    if(invalid.length>1) {
        for (let obj1 of invalid) {
            console.log(obj1);
        }


    }


}
solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@, ",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
)