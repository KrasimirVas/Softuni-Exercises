function find([day,month,year]){
    let date = new Date(year,month-1,day);

    date.setDate(date.getDate()-day);

    console.log(date.getDate());
}
find([17, 3, 2002])