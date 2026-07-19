const cform = document.forms["contactform"];
const nameinput = cform.elements["username"];
const mailinput = cform.elements["useremail"];
const subjectinput = cform.elements["usersubject"];
const msginput = cform.elements["usermsg"];

cform.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameinput.value.trim();
  const mail = mailinput.value.trim();
  const sub = subjectinput.value.trim();
  const msg = msginput.value.trim();
  if (name === "" || mail === "" || sub === "" || msg === "") {
    alert("Please enter all the fields.");
  } else if (!mailinput.checkValidity()) {
    alert("Please enter a valid email address.");
  } else {
    alert("Message sent Successfully!");
    cform.reset();
  }
});

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
