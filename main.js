let link = document.querySelectorAll('.nav__link');


for (var i = 0; i < link.length; i++) {
    link[i].onclick = function () {


        for (var k = 0; k < link.length; k++) {

            link[k].classList.remove('active')

        }

        this.classList.add('active')

    }
}








var images = document.querySelectorAll(".slider__item");

document.querySelector(".right").onclick = right;
var counter = 0;
document.querySelector(".left").onclick = left;
var li = document.querySelectorAll('.slider__dots-item');
function right() {
    images[counter].classList.remove("active");
    li[counter].classList.remove("active-li");
    counter++;
    if (images.length == counter) {
        counter = 0;
    }
    images[counter].classList.add("active");
    li[counter].classList.add("active-li");
}

function left() {
    images[counter].classList.remove("active");
    li[counter].classList.remove("active-li");
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    images[counter].classList.add("active");
    li[counter].classList.add("active-li");
}

for(var i =0; i<li.length;i++){
    li[i].onclick=function() {
        
        for(var j =0; j<li.length;j++){
            li[j].classList.remove('active-li');
            images[j].classList.remove('active');
        }
        
        this.classList.add('active-li');
        var dataSlide=this.getAttribute('data-slide');
        images[dataSlide].classList.add('active');
        counter = dataSlide;
    }
}

