const zone1 = document.querySelector('#zone1')
const zone2 = document.querySelector('#zone2')
const actionIcon = document.querySelector('#action i')
zone1.addEventListener('click', function(){
    actionIcon.setAttribute('class', 'fas fa-chevron-down')
    actionIcon.setAttribute('data-zone', '1')
    
})
zone2.addEventListener('click', function(){
    actionIcon.setAttribute('class', 'fas fa-chevron-up')
    actionIcon.setAttribute('data-zone', '2')
})
