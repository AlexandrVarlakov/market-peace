const swiper = new Swiper('.swiper', {
    
    slidesPerView: 'auto',
    speed: 1000,
  
      navigation:{
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev'
      }, 

      breakpoints: {
        // when window width is >= 320px
        
      }
    
  });
  

  const swiper_plain = new Swiper('.swiper-price-plan', {
    
    slidesPerView: 'auto',
    speed: 1000,

    watchOverflow: true,
    
      navigation:{
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev'
      }, 
    
  });
  
  let options = {
    //zIndex: 1000, 
    background: 'rgba(0, 0, 0, 0.7)', 
    //displayFog: 'block', //Значение по умолчанию flex
    //displayModal: 'flex', //Значение по умолчанию block
    //showModalAnimationName: 'fadeInBottom', 
    //closeModalAnimationName: 'fadeOutTop', 
    closeClasses: ['close-btn-wrap', 'close-btn'], 
    //closeModalOnFogClick: false, 
    showModalAnimationDuration: 800,
    //closeModalAnimationDuration: 300,
    showFogAnimationName: 'fadeInBottom',
    closeFogAnimationName: 'fadeOutTop',
    showFogAnimationDuration: 700,
    closeFogAnimationDuration: 700,

    documentScrolled: true, 
    //onModalClose: function(){console.log('modal close');},
    //onModalOpen: function(){console.log('modal open');}

}

document.querySelectorAll('.btn-entry').forEach( (item) => {
    item.onclick = function(){
        let modal = new easyModal('modal-entry', options);
    }

} ) 
document.querySelectorAll('.btn-question').forEach( (item) => {
    item.onclick = function(){
        let modal = new easyModal('modal-question', options);
    }

} ) 


let modal_menu = document.querySelector('.modal-menu');
let close_menu = document.querySelector('.modal-menu__close-btn');


document.querySelector('.sidebar__hamburger').onclick = function(){
  modal_menu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(modal){
  document.body.style.overflow = 'auto';
  modal_menu.style.display = 'none';
}

close_menu.onclick = function(){
  closeModal(modal_menu);
}

document.querySelectorAll('.site-menu__link').forEach( (item) => {
  item.onclick = function(){
    closeModal(modal_menu);
  }
} ) 

document.querySelector('.join-btn_modal').onclick = function(){
  closeModal(modal_menu);
  let modal = new easyModal('modal-entry', options);
}

