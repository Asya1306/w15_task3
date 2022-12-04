// светлая тема
function addWhiteBg(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.getElementById('image').style.display = 'block';
    document.getElementById('image').src = 'assets/img/2.jpg';
}
// темная тема
function addBlackBg(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.getElementById('image').style.display = 'block';
    document.getElementById('image').src = 'assets/img/3.jpg';
}
// зеленая тема
function addGreenBg(){
    document.body.style.backgroundColor = '#D7FBE8';
    document.body.style.color = '#1FAB89';
    document.getElementById('image').style.display = 'block';
    document.getElementById('image').src = 'assets/img/1.jpg';
}

const select = document.getElementById('select');

select.onchange = switchColorBg; 

function switchColorBg () {
    switch (select.value) {
        case 'white': addWhiteBg(); break
        case 'black': addBlackBg(); break
        case 'green': addGreenBg(); break
    }
}