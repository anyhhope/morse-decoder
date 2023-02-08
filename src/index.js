const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let table = structuredClone(MORSE_TABLE);
    for(var key in table){
        let numberKey = "";
        for(var i = 0; i < key.length; i++){
            if(key[i] === '.'){
                numberKey += "10";
            }
            else{
                numberKey += "11";
            }
        }
        table[numberKey] = table[key];
        delete table[key];
    }
    let result = "";
    while(expr.length != 0){
        let slice = expr.substr(0, 10);
        if(slice[0] === "*"){
            result += " ";
            expr = expr.slice(10);
            continue;
        }
        while(slice[0] === "0"){
            slice = slice.slice(1);
        }
        for(var key in table){
            if(slice === key){
                result += table[key];
                break;
            }
        }
        expr = expr.slice(10);
    }
    return result;
}

module.exports = {
    decode
}