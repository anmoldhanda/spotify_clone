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
