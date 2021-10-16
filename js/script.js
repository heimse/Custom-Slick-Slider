$('.slider__container').slick({
    arrows: true,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
    autoplay: true,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 958,
            settings: {
                dots: true,
                accessibility: false
            }
        }
    ]
});
$(document).load(function() {
    initTitlesHeight();
    window.addEventListener('resize', initTitlesHeight);

    function initTitlesHeight() {
        const titles = document.querySelectorAll('.slide__title');

        titles.forEach(item => item.removeAttribute('style'));
        

        let maxHeight = titles[0].offsetHeight;

        for(let i = 1; i < titles.length; i++) {
            if (titles[i].offsetHeight > maxHeight) {
                maxHeight = titles[i].offsetHeight;
            }
        }
        
        titles.forEach(item => item.style.height = maxHeight + 'px');
    }
});