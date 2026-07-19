/* image slider */
const images = [
  "images/home.jpg",
  "images/home2.jpg",
  "images/home3.jpg",
  "images/home4.jpg",
  "images/home5.jpg",
];
// console.log(images[0]);   checking 
// console.log(images[1]);

let currentImage = 0;

function changeBg() {
  const slide = document.querySelector(".bgimg");
  slide.style.backgroundImage = `url(${images[currentImage]})`;
  currentImage += 1;
  if (currentImage === images.length) {
    currentImage = 0;
  }
}
changeBg();
setInterval(changeBg, 3000);

/* search functionality */
/* Get references to all elements */
const locinput = document.getElementById("location");
const checkininput = document.getElementById("checkin");
const checkoutinput = document.getElementById("checkout");
const guestinput = document.getElementById("guests");
const searchbtn = document.querySelector(".cards button");

searchbtn.addEventListener("click", searchTrip);

function searchTrip() {
  let location = locinput.value;
  let checkin = checkininput.value;
  let checkout = checkoutinput.value;
  let guests = guestinput.value;

  /*checking */
  console.log(location);
  console.log(checkin);
  console.log(checkout);
  console.log(guests);

  /* validation */
  if (location === "" || checkin === "" || checkout === "" || guests === "") {
    alert("Please fill all the fields.");
    return;
  }

  /* localstorage */
  localStorage.setItem("Location", location);
  localStorage.setItem("Checkin", checkin);
  localStorage.setItem("Checkout", checkout);
  localStorage.setItem("Guests", guests);

  localStorage.setItem("page", "search");

  window.location.href = "explore.html";
}
