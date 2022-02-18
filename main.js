window.onload = () => {
  loadSlide();
}

document.addEventListener('keyup', keys);


const slides = [
  {
    title: 'Discover innovative ways to decorate',
    content: `We provide unmatched quality, comfort, and style for property 
    owners across the country. Our experts combine form andnfunction in bringing 
    your vision to life. Create a room in your own style with our collection and 
    make your property a reflection of you and what you love.`,
    background_img: "url('/Reto6-Room/images/desktop-image-hero-1.jpg')",
    mobile_img: "url('/Reto6-Room/images/mobile-image-hero-1.jpg')",
  },
  {
    title: 'We are available all across the globe',
    content: `With stores all over the world, it's easy for you to find furniture 
    for your home or place of business. Locally, we’re in most major cities throughout 
    the country. Find the branch nearest you using our store locator. Any questions?
    Don't hesitate to contact us today.`,
    background_img: "url('/Reto6-Room/images/desktop-image-hero-2.jpg')",
    mobile_img: "url('/Reto6-Room/images/mobile-image-hero-2.jpg')",
  },
  {
    title: 'Manufactured with the best materials',
    content: `Our modern furniture store provide a high level of quality. Our 
    company has invested in advanced technology to ensure that every product 
    is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their
    home and office.`,
    background_img: "url('/Reto6-Room/images/desktop-image-hero-3.jpg')",
    mobile_img: "url('/Reto6-Room/images/mobile-image-hero-3.jpg')",
  }
]

const menu_icon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const close_icon = document.getElementById('close-icon');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let slide_index = 0;

menu_icon.addEventListener('click', () => {
  menu_icon.style.display = 'none';
  logo.style.display = 'none';
  navbar.style.display = 'flex';
});

close_icon.addEventListener('click', () => {
  navbar.style.display = 'none';
  menu_icon.style.display = 'inline';
  logo.style.display = 'inline';
});

prev.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide);

function previousSlide() {
  if (slide_index == 0) {
    slide_index = slides.length - 1;
  }
  else{
    slide_index--;
  }
  loadSlide();
}

function nextSlide() {
  if (slide_index == slides.length - 1) {
    slide_index = 0;
  }
  else {
    slide_index++;
  }
  loadSlide();
}

function loadSlide() {
  const title = document.getElementById('title');
  const content = document.getElementById('content');
  
  title.textContent = slides[slide_index].title;
  content.textContent = slides[slide_index].content;
  
  resizeimg();
}

function resizeimg() {
  const background_img = document.getElementById('section-1');
  let windowWidth = window.innerWidth;

  if (windowWidth >= 550) {
    background_img.style.backgroundImage = slides[slide_index].background_img;
  }
  else {
    background_img.style.backgroundImage = slides[slide_index].mobile_img;
  }
}

function keys(event) {
  if (event.keyCode === 37){
    prev.click();
  }
  if (event.keyCode === 39) {
    next.click();
  }
}

window.addEventListener('resize', resizeimg);