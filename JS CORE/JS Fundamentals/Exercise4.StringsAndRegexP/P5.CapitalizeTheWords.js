function result(text) {
    let arr = text.split(' ');
    let result = [];

    arr.forEach(word => result.push(word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)));
    console.log(result.join(' '));
}
result("Was that Easy? tRY thIs onE for SiZe!")