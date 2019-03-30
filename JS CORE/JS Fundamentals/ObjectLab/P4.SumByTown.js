function solve(arr) {
let sum ={}
    for (let i = 0; i < arr.length; i+=2) {
        let [town,income]=[arr[i], Number(arr[i+1])];
        if(sum[town]==undefined){
            sum[town]=income;
        }
        else{
            sum[town]+=income;
        }

    }
    console.log(JSON.stringify(sum))

}
solve(['Sofia','20', 'Varna','10', 'Sofia','5'])