let x = document.getElementById('menu')
let menubtn = document.getElementById('menu-icon')
let closebtn = document.getElementById('close-icon')


function openmenu(){
    x.style.left = "0%"
    menubtn.style.display = "none"
    closebtn.style.display = "block"
}

function closemenu(){
    x.style.left = "100%"
    menubtn.style.display = "block"
    closebtn.style.display = "none"
}