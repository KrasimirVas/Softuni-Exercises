function result(arr) {
    let input = arr.join('');
    let regex = /([0-9]+)/g;
    let str = [];
    let match = regex.exec(input);

    while (match != null){
        str.push(match[1]);
        match = regex.exec(input);
    }

    console.log(str.join(' '));
}
result(["The300","What is that?","I think it’s the 3rd movie.","Lets watch it at 22:45"])

