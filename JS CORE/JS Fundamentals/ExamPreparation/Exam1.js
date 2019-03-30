function solve(input) {

    let counterClumsy=1;
    let counterSpec=1;

    let spectotal=0;
    let averagetotal=0;
    let clumsy=0;


    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' : ')
        let profesion = currentRow[0]
        let salary = Number(currentRow[1])
        if ((profesion ===`Programming` || profesion===`Hardware maintenance`|| profesion===`Cooking` || profesion===`Translating` || profesion===`Designing`) && counterSpec%2!==0 && salary>=200){
            spectotal+=0.8*salary;
            counterSpec++;

        }
        else if ((profesion ===`Programming` || profesion===`Hardware maintenance`|| profesion===`Cooking`||  profesion===`Translating` || profesion===`Designing`) && counterSpec%2===0 && salary>=200) {
            spectotal += 0.8 * salary;
            spectotal += 200;
            counterSpec++;
        }
        else if(profesion ===`Driving` || profesion===`Managing`|| profesion===`Fishing`|| profesion===`Gardening`){
            averagetotal+=salary;
        }
         else if((profesion ===`Singing` || profesion===`Accounting`|| profesion===`Teaching`|| profesion===`Exam-Making` || profesion===`Acting` || profesion===`Writing`|| profesion===`Lecturing` || profesion===`Modeling` || profesion===`Nursing`) && counterClumsy%2!==0 && counterClumsy%3!==0){
            clumsy+=salary;
            counterClumsy++;

        }
        else if((profesion ===`Singing` || profesion===`Accounting`|| profesion===`Teaching`|| profesion===`Exam-Making` || profesion===`Acting` || profesion===`Writing`|| profesion===`Lecturing` || profesion===`Modeling` || profesion===`Nursing`) && counterClumsy%2===0 && counterClumsy%3!==0){
            clumsy+=salary*0.95;
            counterClumsy++;

        }
        else if((profesion ===`Singing` || profesion===`Accounting`|| profesion===`Teaching`|| profesion===`Exam-Making` || profesion===`Acting` || profesion===`Writing`|| profesion===`Lecturing` || profesion===`Modeling` || profesion===`Nursing`) && counterClumsy%3===0 && counterClumsy %2!==0){
            clumsy+=salary*0.90;
            counterClumsy++;

        }
        else if((profesion ===`Singing` || profesion===`Accounting`|| profesion===`Teaching`|| profesion===`Exam-Making` || profesion===`Acting` || profesion===`Writing`|| profesion===`Lecturing` || profesion===`Modeling` || profesion===`Nursing`) && counterClumsy%2===0 && counterClumsy%3===0 ){
            let current=salary*0.95
            clumsy+=current*0.90
            counterClumsy++;

         }




    }
    let totalGold=spectotal+averagetotal+clumsy
    let goldneed=1000-totalGold
    let goldMore=totalGold-1000;


if(totalGold<1000){
    console.log(`Final sum: ${totalGold.toFixed(2)}`)
    console.log(`Mariyka need to earn ${goldneed.toFixed(2)} gold more to continue in the next task.`)
}
else{
    console.log(`Final sum: ${totalGold.toFixed(2)}`)
    console.log(`Mariyka earned ${goldMore.toFixed(2)} gold more.`)
}





}
solve(["Teaching : 100", "Teaching : 100", "Teaching : 100", "Teaching : 100", "Teaching : 100", "Teaching : 100"])
//solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])