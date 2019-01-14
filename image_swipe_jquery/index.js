var index = 0;
var time = 60000;
var images = ['../j2.jpg', '../j3.jpg', '../j5.jpg'];

$(document).ready(function() {
    changeImg();
    setInterval(next, time);
    $('#previous').click(prev);
    $('#next').click(next);
})

function increment() {
    if (index >= images.length - 1) {
        index = 0;
    } else {
        index++;
    }
}

function decrement() {
    if ( index == 0) {
        index = images.length - 1;
    } else {
        index--;
    }
}

function changeImg(){
    $('#slide').attr('src', images[index]);
}

function prev(){
    decrement();
    $('#slide').attr('src', images[index]);
}

function next(){
    increment();
    $('#slide').attr('src',images[index]);
}