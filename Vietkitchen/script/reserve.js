window.addEventListener("load", function(){
  
   document.querySelector(".page-loader").classList.add("fade-out");
   setTimeout(function(){
      document.querySelector(".page-loader").style.display="none";
   },600);
});
 let navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", toggleNav);
 
 function toggleNav(){
     navToggler.classList.toggle("active");
     document.querySelector(".nav").classList.toggle("open");
 }
 
 
 document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
 }); 


 let form = document.forms.reservation;
form.addEventListener("submit", function (ev) {
   ev.preventDefault();
   form.reset()
   document.getElementById("overlay").style.visibility = "visible";
   document.getElementById("overlay").style.display = "block";
})

let closeBtn = document.getElementById('close-button');
closeBtn.addEventListener('click', function (e) {
   document.getElementById("overlay").style.visibility = "hidden";
   document.getElementById("overlay").style.display = "none";
   location.reload()
})

