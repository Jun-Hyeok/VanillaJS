// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleOnmouse: function() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeavemouse: function() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleRclick: function() {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[3];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleOnmouse);
h2.addEventListener("mouseleave", superEventHandler.handleLeavemouse);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleRclick);
