var landscape = document.querySelector('.landscape');
var portrait = document.querySelector('.portrait');
var square = document.querySelector('.square');
var menu = document.getElementById('menu');
var canvas_width = document.getElementById('width-input');
var canvas_height = document.getElementById('height-input');
var filename = document.getElementById('filename').textContent;
var workspace = document.getElementById('workspace');

workspace.style.display = "none";

document.querySelector('.cancel-0').addEventListener('click', function () {
    menu.style.display = "none";
});

document.querySelector('.cancel-1').addEventListener('click', function () {
    workspace.style.display = "none";
});

landscape.addEventListener('click', function () {
    landscape.classList.add('orient-active');
    portrait.classList.remove('orient-active');
    square.classList.remove('orient-active');
    canvas_width.value = '1080';
    canvas_height.value = '566';
});

portrait.addEventListener('click', function () {
    portrait.classList.add('orient-active');
    landscape.classList.remove('orient-active');
    square.classList.remove('orient-active');
    canvas_width.value = '1080';
    canvas_height.value = '1350';
});

square.addEventListener('click', function () {
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

document.querySelector('.create').addEventListener('click', function () {
    filename = document.getElementById('filename').textContent;
    menu.style.display = "none";
    workspace.style.display = "block";
});
