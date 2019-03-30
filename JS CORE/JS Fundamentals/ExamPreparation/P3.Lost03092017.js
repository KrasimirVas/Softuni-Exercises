function solve(message,text){
    let pattern =/(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
    let messagePattern = new RegExp(`${message}([\\s\\S]*)${message}`, 'gim');

    let north=''
    let east=''
    let currentMatch=pattern.exec(text);
    while(currentMatch){
        if(currentMatch[1].toLowerCase()==="north"){
            north=currentMatch[2]+'.'+currentMatch[3]+" N"
            //42.645746 N
        }
        else{
            east=currentMatch[2]+'.'+currentMatch[3]+" E"
        }
        currentMatch=pattern.exec(text)
    }




    let messageContent = messagePattern.exec(text)

    let finalmes=messageContent[1]
    console.log(north)
    console.log(east)
    console.log(`Message: ${finalmes}`)



}
solve(`<>`,
    `o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b`)