const elModal = document.querySelector('.modal');
const elModalClose = document.querySelector('.modal__menu-btn');
const elModalOpen = document.querySelector('.header__menu-btn');


elModalOpen.addEventListener('click',()=>{
    elModal.classList.add('modal--active');
})
elModalClose.addEventListener('click',()=>{
    elModal.classList.remove('modal--active')
})

// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});