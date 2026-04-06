function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const text = `Hello, I want to order sweet boxes.%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;

  const whatsappNumber = "919839507418"; // replace with your number

  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
}

function openPopup() {
  document.getElementById("whatsapp-popup").classList.add("active");
}
function closePopup() {
  document.getElementById("whatsapp-popup").classList.remove("active");
}
