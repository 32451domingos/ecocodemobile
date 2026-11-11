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
    aside.style.display = "flex";
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

const cookies = document.getElementById("cookies");
const btnAcceptCookies = document.getElementById("btnAcceptCookies");
const btnDeclineCookies = document.getElementById("btnDeclineCookies");
const fundoCookies = document.getElementById("fundoCookies");
const cookieAceito = document.getElementById("cookieAceito");
const cookieNegado = document.getElementById("cookieNegado");


let aceitouCookies = false;

function fcookies(){
  cookies.style.display = "none";
  fundoCookies.style.display = "none";
  if(aceitouCookies){
    cookieAceito.style.display = "block";
    setTimeout(() => {
      cookieAceito.style.display = "none";
    }, 2000);
  }
  else{
    cookieNegado.style.display = "block";
    setTimeout(() => {
      cookieNegado.style.display = "none";
    }, 2000);
  }
};
btnAcceptCookies.addEventListener("click", () => {
  fcookies();
});

btnDeclineCookies.addEventListener("click", () => {
  fcookies();
}); 
