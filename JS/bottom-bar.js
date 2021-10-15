var selectLine = document.querySelector('#selectLine');
var item = document.querySelectorAll('.nav-links ul li a ');

function indicator(e) {
    selectLine.style.left = e.offsetLeft + 'px';
    selectLine.style.width = e.offsetWidth + 'px';
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})  