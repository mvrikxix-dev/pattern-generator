var landscape = document.querySelector('.landscape');
var portrait = document.querySelector('.portrait');
var menu = document.getElementById('menu');
var menu_cancel = document.querySelector('.cancel');

menu_cancel.addEventListener('click', function() {
   menu.style.display="none"; 
});


landscape.addEventListener('click', function() {
    landscape.classList.add('orient-active');
    portrait.classList.remove('orient-active');
});

portrait.addEventListener('click', function() {
    portrait.classList.add('orient-active');
    landscape.classList.remove('orient-active');
});
