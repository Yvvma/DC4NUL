// Main window Functions
const windowFrame = document.getElementById('windowFrame');
const windowBody = document.querySelector('.windowBody');
const closeWindow = document.getElementById('red');
const minimizeWindow = document.getElementById('yellow');
const showWindow = document.getElementById('green');
const rejectBtn = document.getElementById('rejectBtn');

closeWindow.addEventListener('click', () => {

    windowFrame.style.display = 'none';

});

minimizeWindow.addEventListener('click', () => {

    windowBody.style.display = 'none'

});

showWindow.addEventListener('click', () => {

    windowBody.style.display = 'block'

});

rejectBtn.addEventListener('click', () => {

    windowFrame.style.display = 'none'

});