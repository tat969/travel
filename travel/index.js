//burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const overlay = document.querySelector('.overlay');
    const overlayActive = document.querySelector('.overlay_active');
    const stepsItem = document.querySelector('.steps-items');
    const slider = document.querySelector('.destinations-items__wrapper');
    const arrowItem = document.querySelector('.arrow__destinations');
    const imageItem = document.querySelector('.stories__items');
    const navigationItem = document.querySelectorAll('nav-link');
    let offset = 0; 
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navigation-active');
        overlay.classList.add('overlay_active');
        stepsItem.classList.add('opacity');
        slider.classList.add('opacity');
        arrowItem.classList.add('opacity');
        imageItem.classList.add('opacity');

        
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__navigation-active');
        overlay.classList.remove('overlay_active');
        stepsItem.classList.remove('opacity');
        slider.classList.remove('opacity');
        arrowItem.classList.remove('opacity');
        imageItem.classList.remove('opacity');
        
    })

    
}());

//overlay 

(function () {
    const overlayActive = document.querySelector('.overlay_active');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.header__navigation');
    const stepsItem = document.querySelector('.steps-items');
    const slider = document.querySelector('.destinations-items__wrapper');
    const arrowItem = document.querySelectorAll('arrow__destinations');
    const imageItem = document.querySelector('.stories__items');
    

    overlay.addEventListener('click', () => {
 {
    menu.classList.remove('header__navigation-active');
    overlay.classList.remove('overlay_active');
    stepsItem.classList.remove('opacity');
    slider.classList.remove('opacity');
    arrowItem.classList.remove('opacity');
    imageItem.classList.remove('opacity');
 }      
        
    })
}());


//slider


let count = 0;
let width;
const sliderWrapper = document.querySelector('.destinations-items__wrapper');
const images = document.querySelectorAll('.destination__item');
const destinationsButtonLeft = document.querySelector('.destinations-button_left');
const destinationsButtonCenter = document.querySelector('.destinations-button_center');
const destinationsButtonRight = document.querySelector('.destinations-button_right');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');


function init() {
    //console.log('resize');
    width = document.querySelector('.destination__item img').offsetWidth;
    console.log(width);
    sliderWrapper.style.width = width * images.length + 'px' - sliderWrapper.style.gap;
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    
    rollSliderCenter();
}
window.addEventListener('resize', init);
init();



document.querySelector('.destination__item_first').addEventListener('click', function(){
    count++;
    if(count >= images.length/2) {
        count = 0;
    }

    rollSliderLeft();
    destinationsButtonLeft.classList.toggle('destinations-button_colored');
    destinationsButtonCenter.classList.toggle('destinations-button_colored');
    
});

document.querySelector('.destination__item_third').addEventListener('click', function(){
    count--;
    if(count < 0) {
        count = (images.length -1)/2;
    }

    rollSliderRight();
    destinationsButtonRight.classList.toggle('destinations-button_colored');
    destinationsButtonCenter.classList.toggle('destinations-button_colored');
    
});


document.querySelector('.destination__item_second').addEventListener('click', function(){
    count = 0;
    rollSliderCenter();
    destinationsButtonCenter.classList.add('destinations-button_colored');
    destinationsButtonLeft.classList.remove('destinations-button_colored');
    destinationsButtonRight.classList.remove('destinations-button_colored');
    prevButton.classList.remove('prev_inactive');
    nextButton.classList.remove('next_inactive');
    

});

prevButton.addEventListener('click', function(){
    count++;
    if(count >= images.length/2) {
        count = 0;
        
    }

    rollSliderLeft();
    destinationsButtonLeft.classList.toggle('destinations-button_colored');
    destinationsButtonCenter.classList.toggle('destinations-button_colored');
    
})
   




nextButton.addEventListener('click', function(){
    count--;
    if(count < 0) {
        count = (images.length -1)/2;
    }

    rollSliderRight();
    destinationsButtonRight.classList.toggle('destinations-button_colored');
    destinationsButtonCenter.classList.toggle('destinations-button_colored');
   
    
});

function rollSliderLeft() {
    sliderWrapper.style.transform = 'translate('+count *width+'px)';
    prevButton.classList.toggle('prev_inactive');
    nextButton.classList.remove('next_inactive');
}

function rollSliderRight() {
    sliderWrapper.style.transform = 'translate(-'+count *width+'px)';
    prevButton.classList.remove('prev_inactive');
    nextButton.classList.toggle('next_inactive');
}

function rollSliderCenter() {
    sliderWrapper.style.transform = 'translate(0px)';
    prevButton.classList.remove('prev_inactive');
    nextButton.classList.remove('next_inactive');
    

}


console.log('Уважаемые проверяющие, во избежание траты вашего времени - в этой части сделан только слайдер');


