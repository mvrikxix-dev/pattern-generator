var landscape = document.querySelector('.landscape');
var portrait = document.querySelector('.portrait');
var square = document.querySelector('.square');
var menu = document.getElementById('menu');
var menu_cancel = document.querySelector('.cancel');
var canvas_width = document.getElementById('width-input');
var canvas_height = document.getElementById('height-input');
var filename = document.getElementById('filename').textContent;
var artboard = document.getElementById('artboard-input').value;


menu_cancel.addEventListener('click', function() {
   menu.style.display="none"; 
});


landscape.addEventListener('click', function() {
    landscape.classList.add('orient-active');
    portrait.classList.remove('orient-active');
        square.classList.remove('orient-active');
    canvas_width.value = '1080';
    canvas_height.value = '566';
});

portrait.addEventListener('click', function() {
    portrait.classList.add('orient-active');
    landscape.classList.remove('orient-active');
        square.classList.remove('orient-active');

    canvas_width.value = '1080';
    canvas_height.value = '1350';
});

square.addEventListener('click', function() {
    square.classList.add('orient-active');
    landscape.classList.remove('orient-active');
    portrait.classList.remove('orient-active');
    canvas_width.value = '1080';
    canvas_height.value = '1080';
});


function isNumberCheck(evt) {
    var charCode = evt.which > 47 && evt.which < 58 ? true : false;
    return charCode;
};

document.getElementById('create').addEventListener('click', function() {
    filename = document.getElementById('filename').textContent; 
    menu.style.display="none";
    artboard = document.getElementById('artboard-input').value;
});

