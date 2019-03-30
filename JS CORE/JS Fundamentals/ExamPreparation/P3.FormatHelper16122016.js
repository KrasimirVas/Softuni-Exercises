
function formatHelper([text]) {

    text = text.replace(/(\.|,|!|\?|:|;)\s*([a-zA-Z0-9])/g, "$1 $2");
    text = text.replace(/(\.|,|!|\?|:|;)\s*(.)/g, "$1 $2");
    text = text.replace(/\s+(\.|,|!|\?|:|;)/g, "$1");
    text = text.replace(/\.\s+(\d)/g, ".$1");
    text = text.replace(/"\s*([^"]+?)\s*"/g, '"$1"');
    console.log(text);
}
formatHelper([`Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 `])

function solve([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
}
solve(([`Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 `]))