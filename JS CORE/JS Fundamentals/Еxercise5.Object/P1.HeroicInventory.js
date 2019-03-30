function solve(input) {
    let heroData=[];

    for (let i = 0; i < input.length; i++) {
        let currentHeroArgs = input[i].split(" / ")
        let heroName=currentHeroArgs[0];
        let heroLevel=Number(currentHeroArgs[1])
        let currentHeroItems=[]

        if(currentHeroArgs.length>2){
            currentHeroItems=currentHeroArgs[2].split(", ")
        }
    let hero = {
            name:heroName,
            level:heroLevel,
            items:currentHeroItems

    }

        heroData.push(hero)
    }


    console.log(JSON.stringify(heroData))


}
solve(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])