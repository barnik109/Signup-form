const passwd_area = document.querySelector(".passwd-key");
const dispBtn = document.querySelector(".disp");
dispBtn.addEventListener("click", function () {
  if (passwd_area.type === "password") {
    passwd_area.type = "text";
    dispBtn.textContent = "HIDE";
    dispBtn.style.color = "#3498db";
  } else {
    passwd_area.type = "password";
    dispBtn.textContent = "SHOW";
    dispBtn.style.color = "#222";
  }
});