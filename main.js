var CODE = [
  {
    name: "medellin",
    code: 050032,
  },
  {
    name: "envigado",
    code: 055422,
  },
  {
    name: "sabaneta",
    code: 055450,
  },
  {
    name: "bello",
    code: 051050,
  },
  {
    name: "manizales",
    code: 170004,
  },
  {
    name: "pasto",
    code: 520003,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  $input = document.querySelector(".js-input");
  $button = document.querySelector(".js-search");
  $text = document.querySelector(".js-text");

  $button.addEventListener("click", handleClick);
});

function handleClick() {
  var postalCode = "No existe";
  CODE.forEach(function (element) {
    if (element.name === $input.value.toLowerCase()) {
      postalCode = element.code;
    }
  });

  // Fill label
  $text.innerText = postalCode;
}

// SPA -> bundle.js

// *  Modularizar bundle1.js bundle2.js ...
// * -> lazy loader
