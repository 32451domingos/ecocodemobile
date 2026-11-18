const header = document.querySelector(".header");
const btnTopo = document.getElementById("btnTopo");


window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    btnTopo.classList.add("aparecer")
    header.classList.add("pequeno");
  } else {
    header.classList.remove("pequeno");
    btnTopo.classList.remove("aparecer")
  }
});
const btnAside = document.getElementById("btnAside");
const aside = document.getElementById("aside");
const btnCloseAside = document.getElementById("btnCloseAside");
const fundoAside =document.getElementById("fundoAside");
const sections = document.querySelectorAll(".hero, .comoParticipar, .quadrado, .querParticipar, .footer" );
const links = document.querySelectorAll("nav a");

 let activeAside = false;

 function toggleAside(){
    if(activeAside){
      document.getElementById("fundoAside").style.display = "block";
      aside.classList.add("aberto");
    }
    else{
      document.getElementById("fundoAside").style.display = "none ";
      aside.classList.remove("aberto");
    }
}

btnAside.addEventListener("click", () => {
  btnAside.classList.add("aberto");
  activeAside = true;
  toggleAside();
});

btnCloseAside.addEventListener("click", () => {
  activeAside = false;
  toggleAside();
});

fundoAside.addEventListener("click", () =>{
    document.getElementById("fundoAside").style.display = "none ";
    aside.classList.remove("aberto");
})


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


window.addEventListener("scroll", () => {

    let current = "";

    // Verifica se chegámos ao fim da página
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        current = "contacto";
    } else {

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

    }

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});



const cookies = document.getElementById("cookies");
const btnAcceptCookies = document.getElementById("btnAcceptCookies");
const btnDeclineCookies = document.getElementById("btnDeclineCookies");
const fundoCookies = document.getElementById("fundoCookies");
const cookieAceito = document.getElementById("cookieAceito");
const cookieNegado = document.getElementById("cookieNegado");



let aceitouCookies = false;

let escolha = localStorage.getItem("cookies");

if (escolha==="aceite"||escolha==="recusado") {
    cookies.classList.add("fechado");
    document.getElementById("fundoCookies").style.display = "none";
}


function fcookies(){
  cookies.classList.add("fechado");
  document.getElementById("fundoCookies").style.display = "none";
  if(aceitouCookies){
    localStorage.setItem("cookies", "aceite");
  } 
  else{
    localStorage.setItem("cookies", "recusado");
  }
};
btnAcceptCookies.addEventListener("click", () => {
  fcookies();
});

btnDeclineCookies.addEventListener("click", () => {
  fcookies();
}); 


const txt = [];

txt[1] = document.getElementById("txt1");
txt[2] = document.getElementById("txt2");
txt[3] = document.getElementById("txt3");


txt[1].classList.add("aparecer");
let i=1;
let y;
function rotacaotxt(){
  if(i===1)
    y=3;
  else
    y=i-1;
  txt[y].classList.remove("aparecer");
  txt[i].classList.add("aparecer");
  if(i===3) 
    i=1;
  else
    i++;
}

setInterval(rotacaotxt,5000);

