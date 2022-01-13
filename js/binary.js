const textToBinary = text => {
    let result = []
    let c = ''
    for (i of text){
        c = i.charCodeAt(0).toString(2)
        c = c.length < 8 ? '0' + c: c
        result.push(c)
    }
    return result.join(' ')
}

const binaryToText = binary => {
    binary = binary.split(' ')
    let ascii = []
    let sum = 0
    for(byte of binary){
        byte = reverseText(byte)
        sum = 0
        for (bit in byte){
            sum += byte[bit]*2**bit
        }
        ascii.push(String.fromCharCode(sum))
        
    }
    return ascii.join('')
}
