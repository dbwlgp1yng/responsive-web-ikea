let winWidth = window.innerWidth;
let pos = [];
let baseLine = -300;
let con = document.querySelectorAll('section');
let btnTop = document.querySelector('.btn_top');

function saveSectionPos(){
    pos = [];

    con.forEach(el => pos.push(el.offsetTop));
    pos.push(document.getElementsByTagName('footer')[0].offsetTop);
}
saveSectionPos();

window.addEventListener('resize', () => {
    saveSectionPos();
});

window.addEventListener('scroll', () => {
    let scroll = this.scrollY;

    // header
    if(scroll > 100){
        document.querySelector('header').classList.add('on');
    } else{
        document.querySelector('header').classList.remove('on');
    }
    
    // aside
    if(scroll >= 700){
        btnTop.classList.add('on');
    } else{
        btnTop.classList.remove('on');
    }

    // section on
    con.forEach((el, i) => {
        if(scroll >= pos[i] + baseLine && scroll < pos[i+1] + baseLine){
            el.classList.add('on');
        }
    });
});

// scroll top click
btnTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});


// ----------------------jQuery-------------------------
$(function(){
    // header
    let winWidth = $(window).width();

    $(window).on('resize', function(){
        winWidth = $(this).width();
        if(winWidth > 768){
            $('.gnb_wrap').removeAttr('style');
        }
    });
    $('.toggle').on('click', function(){
        $('.gnb_wrap').fadeToggle();
    });

    // main
    var swiper = new Swiper(".visual .swiper", {
        navigation: {
          nextEl: ".visual .swiper-button-next",
          prevEl: ".visual .swiper-button-prev",
        },
      });

    // best
    $('ul.tab_btn li').click(function(e) {
        e.preventDefault();
        var activeTab = $(this).attr('data-tab');

        $('ul.tab_btn li').removeClass('on');
        $('.tab_content').removeClass('on');
        $(this).addClass('on');
        $('.' + activeTab).addClass('on');
    })

    // showroom
    var swiper = new Swiper(".showroom .swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        allowTouchMove: true,
        simulateTouch: false,
    });

    // instagram
    var swiper = new Swiper(".instagram .swiper", {
        speed: 1000,
        scrollbar: {
            el: ".instagram .swiper-scrollbar",
            hide: true,
        },
        slidesPerView: 5,
        spaceBetween: 40,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
      });
});