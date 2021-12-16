const toggle=document.getElementById('toggle');
const flexy=document.getElementById('flexy');

toggle.addEventListener('change' , e=>{
  flexy.classList.toggle('show-monthly');
})

//Acess the navbar
const navbar = document.getElementById('navbar');
//Scrolled state starts of false
let scrolled = false;

//A function
window.onscroll=function(){
  if(window.pageYOffset > 100){
    navbar.classList.remove('top');
    if(!scrolled){
      navbar.style.transform='translateY(-70px)';
    }
    setTimeout(function(){
      navbar.style.transform='translateY(0)';
      scrolled=true;
    },200)
  }else{
    navbar.classList.add('top');
    scrolled=false;
  }
  
}

// window.onscroll = function () {
//   if (window.pageYOffset > 100) {
//     navbar.classList.remove('top');
//     if (!scrolled) {
//       navbar.style.transform = 'translateY(-70px)';
//     }
//     setTimeout(function () {
//       navbar.style.transform = 'translateY(0)';
//       scrolled = true;
//     }, 200);
//   } else {
//     navbar.classList.add('top');
//     scrolled = false;
//   }
// };

