function solve(input) {
    let map=new Map()
    input.join(' ').toLowerCase().split(/[^\w+]+/)
        .filter(a => a !=='').forEach(word => {
        if (!map.has(word)){
            map.set(word,0)
        }
        map.set(word,map.get(word)+1)
    })
    let sortedKeys= Array.from(map.keys()).sort()
    for (let value of sortedKeys) {
        console.log(`'${value}' -> ${map.get(value)} times`)
    }


}
solve(['Far too slow, you\'re far too slow.'])