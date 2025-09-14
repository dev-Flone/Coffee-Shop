const navItem = document.querySelector(".nav-item");
const hamburger = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

document.querySelector("#menu-btn").onclick = () => {
  navItem.classList.toggle("active");
  closeBtn.style.display = "block";
  hamburger.style.display = "none";
};

document.querySelector("#close-btn").onclick = () => {
  navItem.classList.remove("active");
  closeBtn.style.display = "none";
  hamburger.style.display = "block";
};

document.addEventListener("click", (e) => {
  if (e.target !== hamburger && e.target !== navItem && e.target !== closeBtn) {
    navItem.classList.remove("active");
    closeBtn.style.display = "none";
    hamburger.style.display = "block";
  }
});

// Optional: Add a smooth transition effect when toggling the menu
// This can be done via CSS, but if you want to add it via JavaScript, you can do so here
navItem.style.transition = "right 0.3s ease";
closeBtn.style.transition = "display 0.3s ease";
hamburger.style.transition = "display 0.3s ease";

// Note: Ensure that the CSS for .nav-item includes a transition for the 'right' property
// and that the initial state of .nav-item is set to right: -100% or similar to hide it off-screen.
// Example CSS:
/*
.nav-item {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100%;
    background-color: #fff;
    transition: right 0.3s ease;
    z-index: 1000;
}

.nav-item.active {
    right: 0;
}
*/
