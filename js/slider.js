const slider = $('.products').bxSlider({
    pager: false,
    controls: false
});

$(".product-slider__arrow--diriction--prev").click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$(".product-slider__arrow--diriction--next").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})