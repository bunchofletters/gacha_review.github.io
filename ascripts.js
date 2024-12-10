// For collapsing menu item
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 
// End of collapsing menu item

//Slideshow
let slideindex = 1;
showSlides(slideindex);

function plusSlides(n){
  showSlides(slideindex += n);
}

function currentslide(n){
  showSlides(slideindex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideindex = 1}
  else if (n < 1) {slideindex = slides.length}
  
  for(i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
  }

  for (i = 0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideindex-1].style.display = "block";
  dots[slideindex-1].className += " active";
}

function switchImage(imgsrc, imgmap){
  var img = document.getElementById("homedis")

  img.src = imgsrc;
  img.useMap = imgmap;
}