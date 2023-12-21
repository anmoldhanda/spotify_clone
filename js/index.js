// open close search bar for search library input field
const searchsongicon = document.getElementById("searchsongicon");
const searchbarinputfield = document.getElementById("searchbarinputfield");
searchsongicon.addEventListener("click", () => {
  searchbarinputfield.style.display = "block";
  searchsongicon.style.display = "none";
});

searchbarinputfield.addEventListener("blur", () => {
  searchbarinputfield.style.display = "none";
  searchsongicon.style.display = "block";
});

// show hide the current playing songs containr left side panel
const parentcontainer = document.querySelector(".parentcontainer");
const currentsongscontainer = document.querySelector(".currentsongscontainer");
const currentplayingsongiconindicator = document.getElementById(
  "currentplayingsongiconindicator"
);
currentplayingsongiconindicator.addEventListener("click", () => {
  parentcontainer.classList.toggle("showhideleftdetailsarea");
  currentsongscontainer.classList.toggle("showhidecurrentsongscontainer");
  currentplayingsongiconindicator.classList.toggle("green");
});
