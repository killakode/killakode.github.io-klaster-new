
function initializeSlickSlider() {
    if (!$('.slider').hasClass('slick-initialized')) {
        $('.slider').slick({
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992, // Breakpoint для таблет разрешения
                    settings: {
                        slidesToShow: 2, // Количество слайдов, которые будут отображаться одновременно на таблет разрешении
                        slidesToScroll: 2, // Количество слайдов, которые будут скроллиться за раз на таблет разрешении
                    }
                },
                {
                    breakpoint: 768, // Breakpoint для мобильных устройств
                    settings: {
                        slidesToShow: 1, // Количество слайдов, которые будут отображаться одновременно на мобильных устройствах
                        slidesToScroll: 1, // Количество слайдов, которые будут скроллиться за раз на мобильных устройствах
                    }
                }
            ]
        });
    }
}

function destroySlickSlider() {
    if ($('.slider').hasClass('slick-initialized')) {
        $('.slider').slick('unslick');
    }
}

function checkScreenWidth() {
    if (window.innerWidth < 992) {
        initializeSlickSlider();
    } else {
        destroySlickSlider();
    }
}


checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);