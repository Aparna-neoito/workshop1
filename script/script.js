
let toggle=document.querySelector('#topBar');
let menu=document.querySelector('.menu');
let cross=document.querySelector('.cross');


toggle.addEventListener('click',function(){
    menu.classList.toggle('event');

   
});
  
  

var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});

}

