var bg_color = document.querySelector('.color-active');
var workspace = document.getElementById('workspace');
var canvas = document.querySelector('.canvas');
var color_container = document.querySelector('.color-container');

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