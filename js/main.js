const zone1 = document.querySelector('#zone1')
const zone2 = document.querySelector('#zone2')
const actionIcon = document.querySelector('#action i')
const actionButton = document.querySelector('#action')
const select = document.querySelector('#menu')
const titleVar = document.querySelector('#var')

let selected = select.options[select.selectedIndex].value

zone1.addEventListener('click', function(){
    actionIcon.setAttribute('class', 'fas fa-chevron-down')
    actionButton.setAttribute('data-zone', '1')
    
})
zone2.addEventListener('click', function(){
    actionIcon.setAttribute('class', 'fas fa-chevron-up')
    actionButton.setAttribute('data-zone', '2')
})


/**Functions */

select.addEventListener('click', function(){
    selected = select.options[select.selectedIndex].value
    // set title the box
    titleVar.innerText = selected
})

actionButton.addEventListener('click', play)


function play(){
    let zoneSelected = actionButton.getAttribute('data-zone')
    switch (selected){
        case 'Binary':
            if (zoneSelected == 1){
                zone2.value = textToBinary(zone1.value)
            }else{
                zone1.value = binaryToText(zone2.value)
            }
            break
        case 'Morse':
            if (zoneSelected == 1){
                zone2.value = textToMorse(zone1.value)
            }else{
                zone1.value = morseToText(zone2.value)
            }
            break
        case 'Upper':
            if (zoneSelected == 1){
                zone2.value = upperText(zone1.value)
            }else{
                zone1.value = lowerText(zone2.value)
            }
            break
        case 'Lower':
            if (zoneSelected == 1){
                zone2.value = lowerText(zone1.value)
            }else{
                zone1.value = upperText(zone2.value)
            }
            break
        case 'Invert Text':
            if (zoneSelected == 1){
                zone2.value = reverseText(zone1.value)
            }else{
                zone1.value = reverseText(zone2.value)
            }
            break
        case 'Invert Word':
            if (zoneSelected == 1){
                zone2.value = invertWords(zone1.value)
            }else{
                zone1.value = invertWords(zone2.value)
            }
            break
        case 'Base 64':
            if (zoneSelected == 1){
                zone2.value = textToBase64(zone1.value)
            }else{
                zone1.value = base64ToText(zone2.value)
            }
            break
    }
}
