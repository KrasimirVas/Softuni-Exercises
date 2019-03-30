function  solve(arr) {
   let result=[]
   //let keys = arr.shift().split(/\s*\|\s*/).filter(a => a !=='');
    arr.shift();
    

    for (let i = 0; i < arr.length; i++) {
        let values = arr[i].split(/\s*\|\s*/)
            .filter(a => a !=='');
        let obj = {};
        obj['Town'] = values[0]
        obj['Latitude']=+values[1]
        obj['Longitude']=+values[2]
        arr[i]=obj;
    }
   console.log(JSON.stringify(arr))

}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);