function solve(arr) {
   let totalJuice=new Map()
   let totalBottle=new Map()
    let bottleCapacity=1000;

    for (let row of arr) {
        let currentRow=row.split(" => ")
        let fruit=currentRow[0];
        let quantity=Number(currentRow[1]);
        if(!totalJuice.has(fruit)){
            totalJuice.set(fruit,0)
        }
        let currentQuantity = totalJuice.get(fruit);
        currentQuantity += quantity;

        if(currentQuantity>=1000){
            let juiceLeft=currentQuantity%1000;
            let bottlesToStore = (cuurentQuantity - juiceLeft) / 1000;

            if (!totalBottles.has(fruit)) {
                totalBottles.set(fruit, 0)
            }
            totalBottles.set(fruit, totalBottles.get(fruit) + bottlesToStore);
            quantity = juiceLeft;
        }
        totalJuice.set(fruit, totalJuice.get(fruit) + quantity);

    }
    for (let [juicee,bottles]of totalBottles) {
        console.log(juicee + "=> " + bottles);
    }
}
solve([`Peach => 1432`,`Banana => 450`,`Peach => 600`,`Strawberry => 549`])