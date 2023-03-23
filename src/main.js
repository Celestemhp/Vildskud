import "./style.css";
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
Alpine.start()


// Alpine.js filtrering
function filters() {
  return {
    filterCounter: 0,
    reset: false,
    resetCounter: false,
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },

    isOpen() {
      return this.show === true;
    },

    count() {
      this.show = false;
      this.checked = !this.checked;
      if (this.checked) {
        this.counter = this.counter + 1;
        this.filterCounter = this.filterCounter + 1;
      } else if (!this.checked) {
        this.counter = this.counter - 1;
        this.filterCounter = this.filterCounter - 1;
      }
    },
  };
}

// function dropdown() {
//   return {
//       options: [],
//       selected: [],
//       show: false,
//       open() { this.show = true },
//       close() { this.show = false },
//       isOpen() { return this.show === true },
//       select(index, event) {

//           if (!this.options[index].selected) {

//               this.options[index].selected = true;
//               this.options[index].element = event.target;
//               this.selected.push(index);

//           } else {
//               this.selected.splice(this.selected.lastIndexOf(index), 1);
//               this.options[index].selected = false
//           }
//       },
//       remove(index, option) {
//           this.options[option].selected = false;
//           this.selected.splice(index, 1);


//       },
//       loadOptions() {
//           const options = document.getElementById('select').options;
//           for (let i = 0; i < options.length; i++) {
//               this.options.push({
//                   value: options[i].value,
//                   text: options[i].innerText,
//                   selected: options[i].getAttribute('selected') != null ? options[i].getAttribute('selected') : false
//               });
//           }


//       },
//       selectedValues(){
//           return this.selected.map((option)=>{
//               return this.options[option].value;
//           })
//       }
//   }
// }

// scroll snap
const gra = function(min, max) {
  return Math.random() * (max - min) + min;
}
const init = function(){
let items = document.querySelectorAll('section');
for (let i = 0; i < items.length; i++){
  items[i].style.background = randomColor({luminosity: 'light'});
}
cssScrollSnapPolyfill()
}
init();



// test program

