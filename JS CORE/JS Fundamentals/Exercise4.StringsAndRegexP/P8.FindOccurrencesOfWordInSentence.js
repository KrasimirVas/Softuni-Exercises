function findOccurencesOfWordInSentence(sentence, word) {
    let count = 0;
    let regex = new RegExp("\\b"+word+"\\b", "gi");
    let match = regex.exec(sentence);

    while(match) {
        count++;
        match = regex.exec(sentence);
    }

    console.log(count)
}
findOccurencesOfWordInSentence("The waterfall was so high, that the child couldn’t see its peak.","the")