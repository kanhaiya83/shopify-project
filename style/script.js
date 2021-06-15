a = 1;
window.onscroll = function () {
  myFunction();
};

// Get the header
var slider = document.querySelector(".homepage-slider-container");
var flkty = new Flickity(slider, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
});
// Get the offset position of the navbar
var sliderOffsetValue = slider.offsetTop;
header = document.querySelector("header");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > "50") {
    header.classList.add("sticky-homepage-header");
  } else {
    header.classList.remove("sticky-homepage-header");
  }
}
var elem = document.querySelector(".product-images-wrapper");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  pageDots: false,
});

//for quantity in product

quantityMinusBtn = document.querySelector(".product-quantity-container .minus");
quantityPlusBtn = document.querySelector(".product-quantity-container .plus");
quantityCountInput = document.querySelector(
  ".product-quantity-container input"
);
quantityMinusBtn.addEventListener("click", () => {
  if (parseInt(quantityCountInput.value) > 0) {
    quantityCountInput.value = (
      parseInt(quantityCountInput.value) - 1
    ).toString();
  }
});
quantityPlusBtn.addEventListener("click", () => {
  quantityCountInput.value = (
    parseInt(quantityCountInput.value) + 1
  ).toString();
});
