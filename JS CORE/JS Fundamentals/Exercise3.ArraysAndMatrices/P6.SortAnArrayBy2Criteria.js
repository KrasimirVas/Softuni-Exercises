function solve(input) {
    let result =input.sort().sort((a,b)=> a.length > b.length)

    result.forEach(x=>console.log(x))


}




solve(['alpha','beta','gamma'])