// Plan
const plan1 = document.querySelector('#plan1');
const plan2 = document.querySelector('#plan2');
const plan3 = document.querySelector('#plan3');
const planButton1 = document.querySelector('#planButton1');
const planButton2 = document.querySelector('#planButton2');
const planButton3 = document.querySelector('#planButton3');
const planButtonBlur1 = document.querySelector('#planButtonBlur1');
const planButtonBlur2 = document.querySelector('#planButtonBlur2');
const planButtonBlur3 = document.querySelector('#planButtonBlur3');
const planButtonText1 = document.querySelector('#planButtonText1');
const planButtonText2 = document.querySelector('#planButtonText2');
const planButtonText3 = document.querySelector('#planButtonText3');
const section = document.querySelector('.section__plan');

function planActive(plan) {
    planInactive(plan1);
    planInactive(plan2);
    planInactive(plan3);
    plan.classList.add('plan_active');
}
function planInactive(plan) {
    plan.classList.remove('plan_active');
}

planButton1.addEventListener('click', () => {
    planActive(plan1);
})
planButton2.addEventListener('click', () => {
    planActive(plan2);
})
planButton3.addEventListener('click', () => {
    planActive(plan3);
})

section.addEventListener('click', (e) => {
    if (!e.target.closest('.plan__plan-block')) {
        planInactive(plan1);
        planInactive(plan2);
        planInactive(plan3);
    }
})

function clickButton(button, blur, text) {
    button.classList.add('plan__button_active');
    blur.classList.add('plan__button-blur_active');
    text.classList.add('plan__button-text_active');

    setTimeout(() => {
        button.classList.remove('plan__button_active');
        blur.classList.remove('plan__button-blur_active');
        text.classList.remove('plan__button-text_active');
    }, 250);
}

if (document.documentElement.clientWidth < 420) {
    planButton1.addEventListener('click', () => clickButton(planButton1, planButtonBlur1, planButtonText1));
    planButton2.addEventListener('click', () => clickButton(planButton2, planButtonBlur2, planButtonText2));
    planButton3.addEventListener('click', () => clickButton(planButton3, planButtonBlur3, planButtonText3));
}


// Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})


// Arrows
const owlPrev = document.querySelector('.owl-prev');
const owlNext = document.querySelector('.owl-next');

owlPrev.innerHTML += `<div class="arrow-left arrow"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 8.00291H3.925L8.4625 2.55291C8.67467 2.29764 8.77675 1.96854 8.74628 1.638C8.7158 1.30747 8.55527 1.00258 8.3 0.790408C8.04473 0.578235 7.71563 0.476157 7.3851 0.506632C7.05456 0.537107 6.74967 0.697637 6.5375 0.952908L0.2875 8.45291C0.245451 8.51256 0.207849 8.57523 0.175 8.64041C0.175 8.70291 0.175 8.74041 0.0875002 8.80291C0.0308421 8.94623 0.0011764 9.0988 0 9.25291C0.0011764 9.40702 0.0308421 9.55958 0.0875002 9.70291C0.0875002 9.76541 0.0874998 9.80291 0.175 9.86541C0.207849 9.93058 0.245451 9.99325 0.2875 10.0529L6.5375 17.5529C6.65503 17.694 6.8022 17.8075 6.96856 17.8853C7.13491 17.963 7.31636 18.0032 7.5 18.0029C7.79207 18.0035 8.07511 17.9018 8.3 17.7154C8.42657 17.6105 8.5312 17.4816 8.60789 17.3362C8.68458 17.1907 8.73183 17.0316 8.74692 16.8679C8.76202 16.7042 8.74466 16.5391 8.69586 16.3821C8.64705 16.2251 8.56775 16.0792 8.4625 15.9529L3.925 10.5029H18.75C19.0815 10.5029 19.3995 10.3712 19.6339 10.1368C19.8683 9.90237 20 9.58443 20 9.25291C20 8.92139 19.8683 8.60345 19.6339 8.36902C19.3995 8.1346 19.0815 8.00291 18.75 8.00291Z" fill="#F53838"/>
    </svg></div>`;
owlNext.innerHTML += `<div class="arrow-right arrow"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.25 8.00291H16.075L11.5375 2.55291C11.3253 2.29764 11.2232 1.96854 11.2537 1.638C11.2842 1.30747 11.4447 1.00258 11.7 0.790408C11.9553 0.578235 12.2844 0.476157 12.6149 0.506632C12.9454 0.537107 13.2503 0.697637 13.4625 0.952908L19.7125 8.45291C19.7545 8.51256 19.7922 8.57523 19.825 8.64041C19.825 8.70291 19.825 8.74041 19.9125 8.80291C19.9692 8.94623 19.9988 9.0988 20 9.25291C19.9988 9.40702 19.9692 9.55958 19.9125 9.70291C19.9125 9.76541 19.9125 9.80291 19.825 9.86541C19.7922 9.93058 19.7545 9.99325 19.7125 10.0529L13.4625 17.5529C13.345 17.694 13.1978 17.8075 13.0314 17.8853C12.8651 17.963 12.6836 18.0032 12.5 18.0029C12.2079 18.0035 11.9249 17.9018 11.7 17.7154C11.5734 17.6105 11.4688 17.4816 11.3921 17.3362C11.3154 17.1907 11.2682 17.0316 11.2531 16.8679C11.238 16.7042 11.2553 16.5391 11.3041 16.3821C11.3529 16.2251 11.4322 16.0792 11.5375 15.9529L16.075 10.5029H1.25C0.91848 10.5029 0.600536 10.3712 0.366116 10.1368C0.131695 9.90237 0 9.58443 0 9.25291C0 8.92139 0.131695 8.60345 0.366116 8.36902C0.600536 8.1346 0.91848 8.00291 1.25 8.00291Z" fill="#F53838"/>
    </svg></div>`;


// Dots
const owlDots = document.querySelector('.owl-dots');
const owlDot = document.querySelector('.owl-dot');
const sectionCarousel = document.querySelector('#sectionCarousel');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dotsNodes = owlDots.childNodes;

owlDot.innerHTML += '<div class="dots-block" id="dotsBlock1"></div><div class="dots-block" id="dotsBlock2"></div>';
const dotsBlock = document.querySelector('#dotsBlock1');
const dotsBlock2 = document.querySelector('#dotsBlock2');
dotsBlock2.style.cssText += 'width: 15px;';

function moveBlock() {
    dotsBlock2.style.cssText += 'opacity: 0;';
    dotsBlock.style.cssText += 'z-index: 1;';
    setTimeout(() => {
        dotsBlock.style.cssText += 'z-index: -1;';
    }, 300);
    dotsBlock2.style.cssText += 'z-index: 1;';
    setTimeout(() => {
        dotsBlock2.style.cssText += 'z-index: -1;';
    }, 300);

    if (document.documentElement.clientWidth > 420) {
        dotsNodes[0].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[1].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[2].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[3].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[4].firstChild.style.cssText += 'opacity: 1;';
    
        let i = 0;
        for (dot of dotsNodes) {
            if (dot.closest('.active')) {
                if (i === 4) {
                    dotsNodes[0].firstChild.style.cssText += 'opacity: 0;';
                    dot.firstChild.style.cssText += 'opacity: 0;';
                    dotsBlock.style.cssText += 'left: 120px;';
                    dotsBlock.style.cssText += 'width: 15px;';
                    dotsBlock2.style.cssText += 'left: 0;';
                    dotsBlock2.style.cssText += 'opacity: 1;';
                } else {
                    dot.firstChild.style.cssText += 'opacity: 0;';
                    dotsNodes[i+1].firstChild.style.cssText += 'opacity: 0;';
                    dotsBlock.style.cssText += 'width: 45px;';
                    switch (i) {
                        case 0:
                            dotsBlock.style.cssText += 'left: 0;';
                            break;
                        case 1:
                            dotsBlock.style.cssText += 'left: 30px;';
                            break;
                        case 2:
                            dotsBlock.style.cssText += 'left: 60px;';
                            break;
                        case 3:
                            dotsBlock.style.cssText += 'left: 90px;';
                            break;
                    }
                }
            }
            i++;
        }
    } else {
        dotsNodes[0].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[1].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[2].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[3].firstChild.style.cssText += 'opacity: 1;';
        dotsNodes[4].firstChild.style.cssText += 'opacity: 1;';
    
        let i = 0;
        for (dot of dotsNodes) {
            if (dot.closest('.active')) {
                dot.firstChild.style.cssText += 'opacity: 0;';
                dotsBlock.style.cssText += 'width: 15px;';
                switch (i) {
                    case 0:
                        dotsBlock.style.cssText += 'left: 0;';
                        break;
                    case 1:
                        dotsBlock.style.cssText += 'left: 30px;';
                        break;
                    case 2:
                        dotsBlock.style.cssText += 'left: 60px;';
                        break;
                    case 3:
                        dotsBlock.style.cssText += 'left: 90px;';
                        break;
                    case 4:
                        dotsBlock.style.cssText += 'left: 120px;';
                        break;
                }
            }
            i++;
        }
    }
}

moveBlock();
owlDots.addEventListener('click', moveBlock);
sectionCarousel.addEventListener('mouseup', () => {
    setTimeout(moveBlock, 4);
});
sectionCarousel.addEventListener('touchend', () => {
    setTimeout(moveBlock, 4);
});
arrowLeft.addEventListener('click', () => {
    setTimeout(moveBlock, 4);
});
arrowRight.addEventListener('click', () => {
    setTimeout(moveBlock, 4);
});


// Border
const owlStage = document.querySelector('.owl-stage');
const stageNodes = owlStage.childNodes;

function borderApear() {
    let k = 0;
    for (coment of stageNodes) {
        coment.firstChild.style.cssText += 'border: 2px solid #ddd;';
    }

    for (coment of stageNodes) {
        if (coment.closest('.active')) {
            stageNodes[k].firstChild.style.cssText += 'border: 2px solid #F53838;';
            break;
        }
        k++;
    }
}

borderApear();
owlDots.addEventListener('click', borderApear);
sectionCarousel.addEventListener('mouseup', () => {
    setTimeout(borderApear, 4);
});
sectionCarousel.addEventListener('touchend', () => {
    setTimeout(borderApear, 4);
});
arrowLeft.addEventListener('click', () => {
    setTimeout(borderApear, 4);
});
arrowRight.addEventListener('click', () => {
    setTimeout(borderApear, 4);
});


// Nav
// $('.go-to').click(function(e) {
//     e.preventDefault();
//     const link = this;
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $(link.hash).offset().top
//     }, 1400);
// });


// To-top
const toTop = document.querySelector('#to-top');

if (window.scrollY > 700) {
    toTop.classList.add('up_active')
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        toTop.classList.add('up_active')
    } else {
        toTop.classList.remove('up_active')
    }
})


// Burger
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');
const item1 = document.querySelector('#item1');
const item2 = document.querySelector('#item2');
const item3 = document.querySelector('#item3');
const item4 = document.querySelector('#item4');
const item5 = document.querySelector('#item5');

function burgerClose() {
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('active');
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');
})

item1.addEventListener('click', burgerClose);
item2.addEventListener('click', burgerClose);
item3.addEventListener('click', burgerClose);
item4.addEventListener('click', burgerClose);
item5.addEventListener('click', burgerClose);