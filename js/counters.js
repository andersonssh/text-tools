const countCharacters = (text) => {
    return text.lenght
}
const countWords = (text) => {
    return text.split(' ').lenght
}
const countOcurrences = (word, text) => {
    let result = 0
    let indexWord = 0
    for(i of text){
        if (word[indexWord] != i){ 
            indexWord = 0
        }
        // if current letter is different then test the first letter of the word again
        if (word[indexWord] == i){
            if (indexWord == word.length - 1){
                result++
                indexWord = 0
                continue
            }else{
                indexWord++
            }
        }  
    
    }
    return result
}