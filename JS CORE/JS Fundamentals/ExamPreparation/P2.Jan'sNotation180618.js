function solve(input){
    let store=[]


    for (let item of input) {
        if(typeof item==='number'){
            store.push(item)
        }
        else{
            if(store.length>1){
                let num1=store.pop();
                let num2=store.pop();
                switch(item){
                    case `+`:store.push(num1+num2); break;
                    case `-`:store.push(num2-num1); break;
                    case `*`:store.push(num1*num2); break;
                    case `/`:store.push(num2/num1); break;
                    default:break;
                }
            }
            else{
                console.log(`Error: not enough operands!`)
                return
            }


        }

    }
    if(store.length>1){
        console.log(`Error: too many operands!`)
    }
    else{
        console.log(store[0])
    }


}
solve([5,3,4,`*`,`-`])