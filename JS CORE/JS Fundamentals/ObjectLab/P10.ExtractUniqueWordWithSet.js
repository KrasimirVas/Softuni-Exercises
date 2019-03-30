function solve(arr) {
    let set=new Set();
    arr.join(' ').toLowerCase().split(/[^\w]+/).filter(a=>a !=='')
        .forEach(w => {
            set.add(w)
        })
    console.log(Array.from(set).join(", "));


}
solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.'])