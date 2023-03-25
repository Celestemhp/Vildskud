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



document.addEventListener('alpine:init', () => {
    Alpine.data('topBtn', () => ({
        scrolltoTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }));
});

const topBtn = document.getElementById("topButton");
window.onscroll = () => {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ?
    topBtn.classList.remove("hidden"): topBtn.classList.add("hidden");

}
