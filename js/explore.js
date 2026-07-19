/*handles Search functionality from the home page */
const page = localStorage.getItem("page");

/* Getting keys */
let place = localStorage.getItem("Location");
let datein = localStorage.getItem("Checkin");
let dateout = localStorage.getItem("Checkout");
let people = localStorage.getItem("Guests");

console.log(place);
console.log(datein);
console.log(dateout);
console.log(people);
console.log(page);

const places = document.querySelectorAll(".place");
console.log(places);
console.log(places[0].querySelector("#pa").textContent);

if (page === "search" && place) {
  for (let placeCard of places) {
    let destination = placeCard.querySelector("#pa").textContent;
    if (destination.toLowerCase().includes(place.toLowerCase())) {
      placeCard.style.display = "block";
    } else {
      placeCard.style.display = "none";
    }
  }
  localStorage.removeItem("page");
} else {
  for (let placeCard of places) {
    placeCard.style.display = "block";
  }
}

/* category filter */
/* getting all the buttons*/
const allbtn = document.getElementById("btn1");
const beachbtn = document.getElementById("btn2");
const mountainbtn = document.getElementById("btn3");
const citybtn = document.getElementById("btn4");
const adventurebtn = document.getElementById("btn5");

/* adding click events */
allbtn.addEventListener("click", showAll);
beachbtn.addEventListener("click", showBeach);
mountainbtn.addEventListener("click", showMountain);
citybtn.addEventListener("click", showCity);
adventurebtn.addEventListener("click", showAdventure);

// to reset the button color change
const btns = [allbtn, beachbtn, mountainbtn, citybtn, adventurebtn];
function resetBtns() {
  btns.forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });
}

function showBeach() {
  resetBtns();
  beachbtn.style.backgroundColor = "blue";
  beachbtn.style.color = "white";
  places.forEach(function (placeCard) {
    if (placeCard.dataset.category === "Beach") {
      placeCard.style.display = "block";
    } else {
      placeCard.style.display = "none";
    }
  });
}

function showMountain() {
  resetBtns();
  mountainbtn.style.backgroundColor = "blue";
  mountainbtn.style.color = "white";
  places.forEach(function (placeCard) {
    if (placeCard.dataset.category === "Mountain") {
      placeCard.style.display = "block";
    } else {
      placeCard.style.display = "none";
    }
  });
}
function showCity() {
  resetBtns();
  citybtn.style.backgroundColor = "blue";
  citybtn.style.color = "white";
  places.forEach(function (placeCard) {
    if (placeCard.dataset.category === "City") {
      placeCard.style.display = "block";
    } else {
      placeCard.style.display = "none";
    }
  });
}
function showAdventure() {
  resetBtns();
  adventurebtn.style.backgroundColor = "blue";
  adventurebtn.style.color = "white";
  places.forEach(function (placeCard) {
    if (placeCard.dataset.category === "Adventure") {
      placeCard.style.display = "block";
    } else {
      placeCard.style.display = "none";
    }
  });
}
function showAll() {
  resetBtns();
  allbtn.style.backgroundColor = "blue";
  allbtn.style.color = "white";
  places.forEach(function (placeCard) {
    placeCard.style.display = "block";
  });
}

// newsletter subcription
const subscribe = document.querySelector(".msg");
const mailid = document.getElementById("mail");
subscribe.addEventListener("click", (event) => {
  event.preventDefault();
  let email = mailid.value.trim();
  if (!mailid.checkValidity()) {
    alert("Please enter a valid email address.");
  } else {
    alert("Subscribed Successfully!");
    console.log(email);
    mailid.value="";
  }
});