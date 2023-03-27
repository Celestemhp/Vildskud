import "./style.css";
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
Alpine.start()


// let counter = 99
// setInterval(() => {
// 		if(counter>0){
// 			counter--
// 		}
//     document.getElementById('counterElement').style.setProperty('--value', counter)
// }, 1000)

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });
      burger.classList.toggle("toggle");
    });
    //
  };
  
  navSlide();



  