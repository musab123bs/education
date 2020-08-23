burger = document.querySelector('.burger')
menuList = document.querySelector('.menu-list')
header = document.querySelector('.header')
bannerHeading = document.querySelector('.banner-heading')
bannerButton = document.querySelector('.banner-button')


burger.addEventListener('click', ()=>{
    menuList.classList.toggle('v-list')
    header.classList.toggle('h-height')
    bannerHeading.classList.toggle('banner-heading-opacity')
    bannerButton.classList.toggle('banner-button-margin')
})