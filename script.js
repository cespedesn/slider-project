const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelectorAll('next-btn');
const previousBtn = document.querySelectorAll('previous-btn');

slides.forEach(function(slide,index)) {
    slide.style.left = `${index * 100}%`;
};
//template string: lets us insert/interpolate variables and expressions into strings without needing to concatenate (merge two or more arrays) 
//like in older versions of JavaScript.


let counter = 0;
nextBtn.addEventListener('click', function(){
    counter ++;
    carousel();
})

previousBtn.addEventListener('click', function(){
    counter --;
    carousel();
})

function carousel() {
//adjusting slide to function properly

    if (counter === slides.length) {
        counter = 0;
    }

    if (couter < 0) {
        counter = slides.length - 1; 
    }
// adjusting button to function properly

    if (counter < slides.length -1) {
        nextBtn.style.display = "none"
    }

    if (counter > 0) {
        slides.style.display = "block";
    }

    else{
        previousBtn.style.display = "none";
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
//an inbuilt function which is used to reposition the element along the horizontal axis

previousBtn.style.display = "none";