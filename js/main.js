var close = document.getElementById('close');
var btn = document.getElementsByTagName('button')[0];

document.getElementsByTagName('nav')[0].style.width = '0';


btn.onclick = function () {
    document.getElementsByClassName('container')[0].style.marginLeft = '200px';
    document.getElementsByTagName('nav')[0].style.width = '200px';
}
close.onclick = function () {
    document.getElementsByClassName('container')[0].style.marginLeft = '0';
    document.getElementsByTagName('nav')[0].style.width = '0';
}