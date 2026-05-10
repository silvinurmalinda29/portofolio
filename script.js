const hiddenElements =
document.querySelectorAll('.hidden');

window.addEventListener('scroll',()=>{

  hiddenElements.forEach((el)=>{

    const position =
    el.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){
      el.classList.add('show');
    }

  });

});