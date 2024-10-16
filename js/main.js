$(function () {


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.content').height() + 0;
        var header = $('header').height();

        if (scroll >= box - header) {
            $('header').addClass('background-header');
        } else {
            $('header').removeClass('background-header')
        }
    })

    $('.owl-banner').owlCarousel({
        center: true,
        items: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        margin: 30,
        responsive: {
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
})

new Swiper('.card-wrapper',
    {
        loop: true,
        spaceBetween: 20,

        // Pagination bullets
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });

document.addEventListener('DOMContentLoaded', function () {
    const gliderElement1 = document.querySelector('.glider-1');
    const gliderElement2 = document.querySelector('.glider-2');
    const gliderElement3 = document.querySelector('.glider-3');

    if (gliderElement1 || gliderElement2 || gliderElement3) {
        new Glider(document.querySelector('.glider-1'), {
            slidesToScroll: 1,
            slidesToShow: 4,
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 1200,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: 4,
                        slidesToScroll: 2,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 304,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        new Glider(document.querySelector('.glider-2'), {
            slidesToScroll: 1,
            slidesToShow: 3,
            draggable: true,
            dots: '.dots-2',
            arrows: {
                prev: '.glider-prev-2',
                next: '.glider-next-2'
            },
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 1200,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 304,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        new Glider(document.querySelector('.glider-3'), {
            slidesToScroll: 1,
            slidesToShow: 3,
            draggable: true,
            dots: '.dots-3',
            arrows: {
                prev: '.glider-prev-3',
                next: '.glider-next-3'
            },
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 1200,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 304,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
});





const filterButtons = document.querySelectorAll('.popular-menu li');
const filterableCards = document.querySelectorAll('.popular-section .product-box');

const filterCards = e => {
    document.querySelector('.popular-menu li.active').classList.remove('active');
    e.target.classList.add('active');

    filterableCards.forEach(card => {
        card.classList.add('hide')

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove('hide');
        }
    })
}

filterButtons.forEach(button => button.addEventListener('click', filterCards))