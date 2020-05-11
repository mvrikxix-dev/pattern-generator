var bg_color = document.querySelector('.color-active');
var workspace = document.getElementById('workspace');
var canvas = document.querySelector('.canvas');
var color_container = document.querySelector('.color-container');
var custom_color = document.querySelector(".custom-color");

custom_color.style.display = "none";

color_container.addEventListener('click', function(e) {
    if(e.target.className === 'color'){
        var selected = document.getElementById(e.target.getAttribute("id"));
        var selected_color = window.getComputedStyle(selected);
        canvas.style.backgroundColor = selected_color.getPropertyValue('background-color');
    }
})

document.querySelector('.next-0').addEventListener('click', function () {
    workspace.style.display = "none";
});

document.querySelector('.add-color').addEventListener('click', function() {
    custom_color.style.display = "block";
});

document.querySelector('.cancel-2').addEventListener('click', function() {
    custom_color.style.display = "none";
});

document.getElementById('custom-add').addEventListener('click', function() {
    if(document.getElementById('custom').value === '') {
        alert('The Custom Color box is empty, kindly add a value');
    }else {
        canvas.style.backgroundColor = document.getElementById('custom').value;
        custom_color.style.display = "none";
    } 
});