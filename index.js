const url = './images/';
const fileName = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let panel = [];

let panels = document.getElementById('panels');
let scale = Math.floor(1000 / fileName.length) + 'px';

for (let i = 0; i < fileName.length; i++){
    panel[i] = document.createElement('div');
    panel[i].innerHTML = `
        <img 
        src='${url + fileName[i]}' 
        alt='${fileName[i]}' 
        />`; 
        panel[i].style.width = scale;
        panel[i].style.transition = '1s';
    panels.appendChild(panel[i]);
    panel[i].addEventListener('mouseover', () => showPics(i));
}

panels.addEventListener('mouseout', () => {
    for (let i = 0; i < fileName.length; i++){
        panel[i].style.width = scale;
    }
});

function showPics (index) {
    panel[index].style.width = '80%';
    for (let i = 0; i < fileName.length; i++){
        if (i != index){
            panel[i].style.width = `${20 / (fileName.length - 1)}%`;
        }
    }
}
