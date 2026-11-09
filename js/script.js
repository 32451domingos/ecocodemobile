const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("pequeno");
  } else {
    header.classList.remove("pequeno");
  }
});
const btnAside = document.getElementById("btnAside");
const aside = document.getElementById("aside");
const btnCloseAside = document.getElementById("btnCloseAside");
 let activeAside = false;

 function toggleAside(){
  if(activeAside){
    btnAside.style.display = "none";
    aside.style.width = 0;
    aside.style.display = "flex";
    aside.style.width = "250px";
  }
  else{
    btnAside.style.display = "flex";
    aside.style.display = "none";
  }
 }



btnAside.addEventListener("click", () => {
  activeAside = true;
  toggleAside();
});

btnCloseAside.addEventListener("click", () => {
  activeAside = false;
  toggleAside();
});