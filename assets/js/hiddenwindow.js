//Hidden Window Functions
const windowElement = document.getElementById('info');
const windowBodyHi = document.querySelector('.infoBody');
const toggleBtn = document.getElementById('acceptBtn');
const closeWindowHi = document.getElementById('redhide');
const minimizeWindowHi = document.getElementById('yellowhide');
const showWindowHi = document.getElementById('greenhide');

let isOpen = false;


toggleBtn.addEventListener('click', () => {

    windowElement.classList.remove('hidden');

});


closeWindowHi.addEventListener('click', () =>{
   
    windowElement.classList.toggle('hidden');

});

minimizeWindowHi.addEventListener('click', () =>{

    windowBodyHi.style.display = 'none'

});

showWindowHi.addEventListener('click', () =>{

    windowBodyHi.style.display = 'block'

});