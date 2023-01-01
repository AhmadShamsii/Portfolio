const hamburgerBtn = document.querySelector(".header-hamburger");
const hamburger = document.querySelector(".hamburger");
const hamburgerSections = document.querySelector(".hamburger-sections");
const hamburgerSection = document.querySelectorAll(".hamburger-section");
const hamburgerContainer = document.querySelector(".hamburger-container");
const allSections = document.querySelectorAll(".section");
const container = document.querySelector(".container");
const plate = document.querySelector(".plate");
const ModeChangeBtn = document.querySelector(".hamburger-mode-change");
const body = document.body;
const otherProject1 = document.querySelector(".other-project-1");
const otherProject2 = document.querySelector(".other-project-2");
const otherProject3 = document.querySelector(".other-project-3");
const otherProjectText1 = document.querySelector(".other-project-text-1");
const otherProjectText2 = document.querySelector(".other-project-text-2");
const otherProjectText3 = document.querySelector(".other-project-text-3");
const mail = document.querySelector(".connects-only-mail");
const copiedBtn = document.querySelector(".copied");

// Check if the media query is true

const mediaQueryLarge = window.matchMedia("(max-width: 1160px)");
const mediaQueryMedium = window.matchMedia("(max-width: 900px)");

//Toggle Mode
const toggleMode = function (e) {
  ModeChangeBtn.children[0].classList.toggle("fa-moon");
  ModeChangeBtn.children[0].classList.toggle("fa-sun");

  if (!e.path[0].classList.contains("fa-moon")) {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (e.path[0].classList.contains("fa-moon")) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};

//Toggle Hamburger
const toggleNav = function (e) {
  e.preventDefault();

  hamburger.classList.toggle("active-hamburger");
  allSections.forEach(function (section) {
    section.classList.toggle("lower-opacity");
  });

  if (window.innerWidth > 900 && window.innerWidth < 1160) {
    hamburger.classList.toggle("active-hamburger-media-large");
  }
  if (window.innerWidth < 900) {
    hamburger.classList.toggle("active-hamburger-media-medium");
  }
};

//Close Hamburger
const closeHamburger = function () {
  hamburger.classList.toggle("active-hamburger");
  if (window.innerWidth > 900 && window.innerWidth < 1160) {
    hamburger.classList.toggle("active-hamburger-media-large");
  } else if (window.innerWidth < 900) {
    hamburger.classList.toggle("active-hamburger-media-medium");
  }
  plate.classList.toggle("active");
  allSections.forEach(function (section) {
    section.classList.toggle("lower-opacity");
  });
};

//Hamburger Pattern Animation
Array.from(document.getElementsByClassName("hamburger-section")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      hamburgerContainer.dataset.activeIndex = index;
    };
  }
);

//Other Project Animation

const otherProjectEffect1 = function (e) {
  e.preventDefault();
  otherProjectText1.classList.toggle("move-up");
  otherProject1.classList.toggle("other-project-onactive-1");
};
const otherProjectEffect2 = function (e) {
  e.preventDefault();
  otherProjectText2.classList.toggle("move-up");
  otherProject2.classList.toggle("other-project-onactive-2");
};
const otherProjectEffect3 = function (e) {
  e.preventDefault();
  otherProjectText3.classList.toggle("move-up");
  otherProject3.classList.toggle("other-project-onactive-3");
};

//Copy Mail

let clockTimeout = null;

const copyMail = async function () {
  copiedBtn.style.display = "block";
  clearTimeout(clockTimeout);
  clockTimeout = setTimeout(() => {
    copiedBtn.style.display = "none";
  }, 1500);

  let text = document.querySelector(".connects-only-mail").innerHTML;
  console.log(text);
  await navigator.clipboard.writeText(text).then(function () {
    console.log("copied");
  });
};

//Form data to mail
const sendMail = function () {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_zw75t1p", "template_9nmun7s", params)
    .then(function (res) {
      document.getElementById("fullName").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
      console.log(res);
    })
    .catch((err) => console.log(err));
};
///////////////////////////      Event Listeners     /////////////////////////////////////////////

ModeChangeBtn.addEventListener("click", toggleMode);

hamburgerBtn.addEventListener("click", toggleNav);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && hamburger.classList.contains("active-hamburger")) {
    closeHamburger();
  }
});

hamburgerSection.forEach(function (section) {
  section.addEventListener("click", closeHamburger);
});

otherProject1.addEventListener("mouseenter", otherProjectEffect1);
otherProject2.addEventListener("mouseenter", otherProjectEffect2);
otherProject3.addEventListener("mouseenter", otherProjectEffect3);

otherProject1.addEventListener("mouseleave", otherProjectEffect1);
otherProject2.addEventListener("mouseleave", otherProjectEffect2);
otherProject3.addEventListener("mouseleave", otherProjectEffect3);

mail.addEventListener("click", copyMail);
