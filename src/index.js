const qrtext = document.querySelector("#qrtext");
const imagebox = document.querySelector(".imagebox");
const qrimage = document.querySelector("#qrimage");

function generateqr() {
  if (qrtext.value.length > 0) {
    qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    imagebox.classList.add("showimage");
    qrtext.classList.remove('error')
  } else {
    imagebox.classList.remove("showimage");
    qrtext.classList.add('error')
  }
}
