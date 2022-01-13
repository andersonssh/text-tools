// return the letter in morse
const CHR_TO_MORSE = new Map()
// add char to morse
CHR_TO_MORSE.set('a', '.-')
CHR_TO_MORSE.set('b', '-...')
CHR_TO_MORSE.set('c', '-.-.')
CHR_TO_MORSE.set('d', '-..')
CHR_TO_MORSE.set('e', '.')
CHR_TO_MORSE.set('f', '..-.')
CHR_TO_MORSE.set('g', '--.')
CHR_TO_MORSE.set('h', '....')
CHR_TO_MORSE.set('i', '..')
CHR_TO_MORSE.set('j', '.---')
CHR_TO_MORSE.set('k', '-.-')
CHR_TO_MORSE.set('l', '.-..')
CHR_TO_MORSE.set('m', '--')
CHR_TO_MORSE.set('n', '-.')
CHR_TO_MORSE.set('o', '---')
CHR_TO_MORSE.set('p', '.--.')
CHR_TO_MORSE.set('q', '--.-')
CHR_TO_MORSE.set('r', '.-.')
CHR_TO_MORSE.set('s', '...')
CHR_TO_MORSE.set('t', '-')
CHR_TO_MORSE.set('u', '..-')
CHR_TO_MORSE.set('v', '...-')
CHR_TO_MORSE.set('w', '.--')
CHR_TO_MORSE.set('x', '-..-')
CHR_TO_MORSE.set('y', '-.--')
CHR_TO_MORSE.set('z', '--..')
CHR_TO_MORSE.set('1', '.----')
CHR_TO_MORSE.set('2', '..---')
CHR_TO_MORSE.set('3', '...--')
CHR_TO_MORSE.set('4', '....-')
CHR_TO_MORSE.set('5', '.....')
CHR_TO_MORSE.set('6', '-....')
CHR_TO_MORSE.set('7', '--...')
CHR_TO_MORSE.set('8', '---..')
CHR_TO_MORSE.set('9', '----.')
CHR_TO_MORSE.set('0', '-----')
CHR_TO_MORSE.set('.', '......')
CHR_TO_MORSE.set(';', '-.-.-.')
CHR_TO_MORSE.set(',', '.-.-.-')
CHR_TO_MORSE.set(':', '---...')
CHR_TO_MORSE.set('?', '..--..')
CHR_TO_MORSE.set('!', '---..-')
CHR_TO_MORSE.set('"', '.-..-.')
CHR_TO_MORSE.set('-', '-....-')
CHR_TO_MORSE.set('(', '-.--.')
CHR_TO_MORSE.set(')', '-.--.-')
CHR_TO_MORSE.set(' ', '/')

const MORSE_TO_CHAR = new Map()
MORSE_TO_CHAR.set('.-', 'a')
MORSE_TO_CHAR.set('-...', 'b')
MORSE_TO_CHAR.set('-.-.', 'c')
MORSE_TO_CHAR.set('-..', 'd')
MORSE_TO_CHAR.set('.', 'e')
MORSE_TO_CHAR.set('..-.', 'f')
MORSE_TO_CHAR.set('--.', 'g')
MORSE_TO_CHAR.set('....', 'h')
MORSE_TO_CHAR.set('..', 'i')
MORSE_TO_CHAR.set('.---', 'j')
MORSE_TO_CHAR.set('-.-', 'k')
MORSE_TO_CHAR.set('.-..', 'l')
MORSE_TO_CHAR.set('--', 'm')
MORSE_TO_CHAR.set('-.', 'n')
MORSE_TO_CHAR.set('---', 'o')
MORSE_TO_CHAR.set('.--.', 'p')
MORSE_TO_CHAR.set('--.-', 'q')
MORSE_TO_CHAR.set('.-.', 'r')
MORSE_TO_CHAR.set('...', 's')
MORSE_TO_CHAR.set('-', 't')
MORSE_TO_CHAR.set('..-', 'u')
MORSE_TO_CHAR.set('...-', 'v')
MORSE_TO_CHAR.set('.--', 'w')
MORSE_TO_CHAR.set('-..-', 'x')
MORSE_TO_CHAR.set('-.--', 'y')
MORSE_TO_CHAR.set('--..', 'z')
MORSE_TO_CHAR.set('.----', '1')
MORSE_TO_CHAR.set('..---', '2')
MORSE_TO_CHAR.set('...--', '3')
MORSE_TO_CHAR.set('....-', '4')
MORSE_TO_CHAR.set('.....', '5')
MORSE_TO_CHAR.set('-....', '6')
MORSE_TO_CHAR.set('--...', '7')
MORSE_TO_CHAR.set('---..', '8')
MORSE_TO_CHAR.set('----.', '9')
MORSE_TO_CHAR.set('-----', '0')
MORSE_TO_CHAR.set('......', '.')
MORSE_TO_CHAR.set('-.-.-.', ';')
MORSE_TO_CHAR.set('.-.-.-', ', ')
MORSE_TO_CHAR.set('---...', ':')
MORSE_TO_CHAR.set('..--..', '?')
MORSE_TO_CHAR.set('---..-', '!')
MORSE_TO_CHAR.set('.-..-.', '"')
MORSE_TO_CHAR.set('-....-', '-')
MORSE_TO_CHAR.set('-.--.', '(')
MORSE_TO_CHAR.set('-.--.-', ')')
MORSE_TO_CHAR.set('/', ' ')


function textToMorse(text){
    let morse = []
    for(letter of text){
        let m = CHR_TO_MORSE.get(letter)
        // add value to list
        morse.push( m === undefined ? '?': m + ' ')
    }
    return morse.join('')
}

function morseToText(morse){
    morse = morse.split(' ')
    let text = []
    for(cod of morse){
        let t = MORSE_TO_CHAR.get(cod)
        // add value to list
        text.push( t === undefined ? '': t)
    }
    return text.join('')
}