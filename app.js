
var photos =["Untitled design (2).png", " Untitled design (3).png", " Untitled design (1).png",];
var imgtag = document.getElementById("hoda_slids");
   
   var count=0;

    
    function nxt(){
        count++;
        if (count>=photos.length){
            count=0;
            imgtag.src=photos[count];

        }else{
            imgtag.src=photos[count];
        }
           
        
    
}

function prev(){
    count--;
    if (count<0){
        count=photos.length-1;
        imgtag.src=photos[count];

    }else{
        imgtag.src=photos[count];
    }

}







/* side by side images slider */
let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const slideWidth = items[0].clientWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateSliderPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSliderPosition();
}

window.addEventListener('resize', updateSliderPosition);
