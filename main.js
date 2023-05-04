const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const imgBox = document.querySelector('.studio-name');
const overlay = document.querySelector('.overlay');
const switchOn = document.querySelector('.btn');
const menuBtn = document.querySelector('.works');
const menu = document.querySelector('.menu');
const menuBox = document.querySelector('.menu-box');
const menuContainer = document.querySelector('.menu-container');
const worksText = document.querySelector('.works-text');
const imgContainer = document.querySelector('.img-box');

//This line of code fires the pointermove event
container.onmousemove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
  
    circle.animate({
      left: `${x}px`,
      top: `${y}px`
    }, {
      duration: 3,
      fill: 'forwards'
    })
  }

const tlForLight = gsap.timeline({paused:true, reversed:true});
const preloadtext = new SplitType('.light'); //this code is package for splitting text
const mySound = new Audio('https://www.studiolumio.com/click.mp3');

let screenSize = gsap.matchMedia();

//these lines of code is a gsap media querry for animations based on screen size
screenSize.add("(max-width:768px)", () => {
    tlForLight.to('.char', {y:-10, opacity:0, duration:.5, ease: "power2.out", stagger: {
        amount:.6,
    }})
      .to(switchOn, {top:'3.5%', left:'6%', duration:1, ease: "power4.inOut"})
      .to(overlay, {display:'none', duration:0}, '-=.5')
      .to(imgBox, {opacity:1, duration:0}, '<')
});

screenSize.add("(min-width:800px)", () => {
    tlForLight.to('.char', {y:-10, opacity:0, duration:.5, ease: "power2.out", stagger: {
        amount:.6,
    }})
      .to(switchOn, {top:'4%', left:'3%', duration:1, ease: "power4.inOut"})
      .to(overlay, {display:'none', duration:0}, '-=.5')
      .to(imgBox, {opacity:1, duration:0}, '<')
});


//This click event triggers the Turning on light animation for the screenSizes
switchOn.addEventListener('click', () => {
    mySound.play();
    tlForLight.reversed() ? tlForLight.play() : tlForLight.reverse();
})

//This opens and closes the menu
const tlForMenu = gsap.timeline({paused:true, reversed:true});
const menuElements = gsap.utils.toArray('.menu-elements');

screenSize.add("(min-width:800px)", () => {
    tlForMenu.to('.menu', {height:'85%', duration:1.2, ease:"power2.inOut"})
         .to(menuElements, {y:0, duration:1.3, ease:"power2.inOut", stagger: {
            amount:0.4
         }}, '<')
         .to('.img-box', {y:120, duration:1}, '<')
});


screenSize.add("(max-width:768px)", () => {
    tlForMenu.to('.menu', {height:'67%', duration:1.2, ease:"power2.inOut"})
         .to(menuElements, {y:0, duration:1.3, ease:"power2.inOut", stagger: {
            amount:0.4
         }}, '<')
         .to('.img-box', {y:120, duration:1}, '<')
});

menuBtn.addEventListener('click', () => {
    mySound.play();
    tlForMenu.reversed() ? tlForMenu.play() : tlForMenu.reverse();

    if(menu.style.height <= '4%') {
        worksText.textContent = 'back';
    }else {
        worksText.textContent = 'works';
    }
})


const img0 = document.querySelector('.inner-img0');
const img1 = document.querySelector('.inner-img1');
const img2 = document.querySelector('.inner-img2');
const img3 = document.querySelector('.inner-img3');


//These lines of code fires when a pointer hovers over the menu elements
menuElements[0].addEventListener('pointerenter', () => {
    img0.style.width = "100%";
})

menuElements[1].addEventListener('pointerenter', () => {
    img1.style.width = "100%";
})

menuElements[2].addEventListener('pointerenter', () => {
    img2.style.width = "100%";
})

menuElements[3].addEventListener('pointerenter', () => {
    img3.style.width = "100%";
})

//These lines of code fires when a pointer leaves the menu elements
menuElements[0].addEventListener('pointerleave', () => {
    img0.style.width = "0%";
})
menuElements[1].addEventListener('pointerleave', () => {
    img1.style.width = "0%";
})
menuElements[2].addEventListener('pointerleave', () => {
    img2.style.width = "0%";
})
menuElements[3].addEventListener('pointerleave', () => {
    img3.style.width = "0%";
})




