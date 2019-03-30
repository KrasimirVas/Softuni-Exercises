function solve(input) {
    let startIndex=Number(input[0])
    let endIndex=Number(input[1])
    let rightWord=input[2].toString()
    let text=input[3]
    let result=[]

    let patternCountry=/([A-Z]{1}[a-z]+[A-Z]{1})/g
    let patternTown=/[0-9]{3}([.][0-9]*)?|[.][0-9]+/gmi

    let countryMatch=patternCountry.exec(text)
    let country=countryMatch[1].toString()


    firstpart=country.slice(0,startIndex)
    secondpart=country.slice(endIndex+1)

    let finalCountry=`${firstpart}${rightWord}${secondpart.toLowerCase()}`
    result.push(`${finalCountry} => `)



    //start with town
    let townMatch= patternTown.exec(text)
    let resultcity = text.match(/[0-9]{3}([.][0-9]*)?|[.][0-9]+/gmi)
    let rounded=[]
    resultcity=resultcity.map(x=>Math.ceil(x))


    let finalcity=resultcity.map(st=>String.fromCharCode(st)).join('')
    finalcity=finalcity[0].toUpperCase()+finalcity.substring(1)
    console.log((`${finalCountry} => ${finalcity}`))





}
solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])
solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])