const images= document.querySelectorAll('.image');
// console.log(images);
images.forEach((image) => {
  image.addEventListener('click', ()=>{
      removeactiveclass();
      image.classList.add('active');
  });
});

function removeactiveclass(){
    images.forEach((image) => {
        image.classList.remove('active');
    });
};