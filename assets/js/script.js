$(function () {
  $(".certificados-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".watch-slider").on("afterChange", function () {
    atualizar_informacoes();
  });
});

const me = document.querySelector("h1");
const skills = document.querySelector("h2");
const menuItems = document.querySelectorAll(".navegacao a[href^='#']");
menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((e, i) => {
    setTimeout(() => {
      element.innerHTML += e;
    }, 110 * i);
  });
}

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

typeWrite(me);
typeWrite(skills);
