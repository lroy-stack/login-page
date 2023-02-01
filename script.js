const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const privacyCheckbox = document.getElementById("privacy-checkbox");

registerBtn.addEventListener("click", function() {
  window.open("register.html", "_blank");
});

loginBtn.addEventListener("click", function() {
  if (privacyCheckbox.checked) {
    alert("Has hecho clic en el botón de inicio de sesión");
  } else {
    alert("Debe aceptar la política de privacidad para continuar");
  }
});
