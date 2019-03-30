function solve(input) {
    let step = input.pop();


    for (let i = 0; i < input.length; i++) {
        if(i % step==0){
            console.log(input[i])

        }

    }

}




solve(['5','20','31','4','20','2'])