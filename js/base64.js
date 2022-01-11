let textToBase64 = text => {
    return btoa(text)
}
let base64ToText = base64 => {
    return atob(base64)
}