const menu = document.querySelector('.open-menu')
const close = document.querySelector('.close-menu')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
    nav.classList.toggle('rotate-close-btn')
})

const menu1 = document.querySelector('.menu-1')
const featuresbtn = document.querySelector('.features-btn')
const menu2 = document.querySelector('.menu-2')
const companybtn = document.querySelector('.company-btn')

featuresbtn.addEventListener('click', () => {
    menu1.classList.toggle('open-menu1');
    featuresbtn.classList.toggle('caret-rotate');
})
companybtn.addEventListener('click', () => {
    menu2.classList.toggle('open-menu2');
    companybtn.classList.toggle('caret-rotate');
})