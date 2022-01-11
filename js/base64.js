const textToBase64 = text => {
    return btoa(text)
}
const base64ToText = base64 => {
    return atob(base64)
}