const open_btn = document.getElementById("open-btn");
const close_btn = document.getElementById("close-btn");
const mobile_view = document.getElementById("mobile-view");

open_btn.addEventListener("click", () => {
  mobile_view.classList.remove("sr-only");
  open_btn.style.display = "none";
  close_btn.style.display = "block";
});
close_btn.addEventListener("click", () => {
  let windowWidth = window.innerWidth;
  close_btn.style.display = "none";
  mobile_view.classList.add("sr-only");
  if (windowWidth < 865) {
    open_btn.style.display = "block";
  }
});
