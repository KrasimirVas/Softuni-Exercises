function solve(lostfight, helmet, sword, shield, armor) {
    let result =0;

    for (let i = 1; i <= lostfight; i++) {
        if(i % 2==0){
            result+=helmet;
        }
        if(i % 3==0){
            result+=sword;
        }
        if(i % 6 ==0){
            result+=shield;
        }
        if( i % 12==0){
            result+=armor;
        }

    }
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`)

    
}
solve(7,2,3,4,5)