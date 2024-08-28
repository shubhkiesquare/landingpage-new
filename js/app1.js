let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let items = document.querySelectorAll(".carousel .list .item");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let backButton = document.getElementById("back");
// let unAcceppClick;

// Set the initial active item
document.addEventListener("DOMContentLoaded", () => {
  if (items.length > 0) {
    items[1].classList.add("active"); // Set the second item as active
  }
});

nextButton.onClick = function () {
  showSlider("next");
};

prevButton.onClick = function () {
  showSlider("prev");
};

const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  carousel.classList.remove("next", "prev");

  if (type === "next") {
    listHTML.appendChild(items[0]); // Move the first item to the end
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]); // Move the last item to the beginning
    carousel.classList.add("prev");
  }

  // Re-select the items after DOM update
  items = document.querySelectorAll(".carousel .list .item");

  // Remove 'active' class from all items
  items.forEach((item) => item.classList.remove("active"));

  // Add 'active' class to the new second item
  items[1].classList.add("active");

  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);
};
seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
  };
});
backButton.onclick = function () {
  carousel.classList.remove("showDetail");
};

// featureCards.forEach((div) => {
//   div.onclick = function () {
//     // Remove the class from all .featureCards divs
//     featureCards.forEach((card) => card.classList.remove("expandDetail"));

//     // Add the class to the clicked div
//     div.classList.add("expandDetail");
//   };
// });

// cards for details

// $.fn.commentCards = function () {
//   return this.each(function () {
//     var $this = $(this),
//       $cards = $this.find(".card"),
//       $current = $cards.filter(".card--current"),
//       $next;

//     $cards.on("click", function () {
//       if (!$current.is(this)) {
//         $cards.removeClass("card--current card--out card--next");
//         $current.addClass("card--out");
//         $current = $(this).addClass("card--current");
//         $next = $current.next();
//         $next = $next.length ? $next : $cards.first();
//         $next.addClass("card--next");
//       }
//     });

//     if (!$current.length) {
//       $current = $cards.last();
//       $cards.first().trigger("click");
//     }

//     $this.addClass("cards--active");
//   });
// };

// $(".cards").commentCards();

// Accordion slider starts here
