// Select The Elements
var logo_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  //toggle_btn = document.querySelector(".toggle-btn");
  logo_btn = document.querySelector(".logo");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

let currentClassIndex = 0;
const cssClassList = ['light', 'dark', 'other'];

function toggleAnimation() {
  // Clone the wrapper

  let clone = big_wrapper.cloneNode(true);

  // Increment the current class index, or reset it to 0 if it has reached the end of the list
  
  // Add the current class from the list to the clone element
  clone.classList.remove(cssClassList[currentClassIndex]);

  currentClassIndex = (currentClassIndex + 1) % cssClassList.length;

  clone.classList.add(cssClassList[currentClassIndex]);
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables

    declare();
    events();
  });
}


function events() {
  logo_btn.addEventListener("click", () => {
    toggleAnimation();
  });
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
