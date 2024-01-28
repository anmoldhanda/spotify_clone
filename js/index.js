// ============= open search bar for search library input field =============
const searchsongicon = document.getElementById("searchsongicon");
const searchbarinputfield = document.getElementById("searchbarinputfield");
searchsongicon.addEventListener("click", () => {
  searchbarinputfield.style.display = "block";
  searchsongicon.style.display = "none";
});

// ============= close search bar for search library input field =============
searchbarinputfield.addEventListener("blur", () => {
  searchbarinputfield.style.display = "none";
  searchsongicon.style.display = "block";
});

// search bar functionality if the user's searched song is present then show the filtered result otherwise empty the container as result
searchbarinputfield.addEventListener("keyup", (e) => {
  let searchterm = searchbarinputfield.value.toLowerCase();
  let allsongscolumn = Array.from(songsitem).forEach((singlesongcolumn) => {
    let singlesongcolumntext = singlesongcolumn.textContent.toLowerCase();
    if (singlesongcolumntext.includes(searchterm)) {
      singlesongcolumn.style.display = "flex";
    } else {
      singlesongcolumn.style.display = "none";
    }
  });
});

// ============= show hide the current playing songs containr right side panel =============
const parentcontainer = document.querySelector(".parentcontainer");
const currentsongscontainer = document.querySelector(".currentsongscontainer");
const currentplayingsongiconindicator = document.getElementById(
  "currentplayingsongiconindicator"
);
currentplayingsongiconindicator.addEventListener("click", () => {
  parentcontainer.classList.toggle("showhideleftdetailsarea");
  currentsongscontainer.classList.toggle("showhidecurrentsongscontainer");
  currentplayingsongiconindicator.classList.toggle("green");
  // ============= if the screen is showing the current playing song indicator right side panel then it will show it and hide the songs library left panel along with its elements =============
  parentcontainer.classList.remove("showhidesidebarlibrary");
  sidenavheadline.forEach((headline) => {
    headline.classList.remove("active");
  });
  opencloselibraryheadline.classList.remove("active");
  playlistsbtn.classList.remove("active");
  sidemenulikesongbox.classList.remove("active");
  recentactivitycontainer.classList.remove("active");
  libraryindicatoricons.classList.remove("active");
});

// ============= show hide the songs library left side panel =============
const showhidesidebarlibarary = document.getElementById(
  "showhidesidebarlibarary"
);
const sidebarnavlinkheadline = document.querySelectorAll(
  ".sidebarnavigation .sidebarlinks h2"
);
const sidenavheadline = Array.from(sidebarnavlinkheadline);
const opencloselibraryheadline = document.querySelector(".opencloselibrary h2");
const playlistsbtn = document.querySelector(".playlistsbtn");
const sidemenulikesongbox = document.querySelector(
  ".sidebarmenu .likedsongscontainer"
);
const recentactivitycontainer = document.querySelector(
  ".recentactivitycontainer"
);
const libraryindicatoricons = document.querySelector(".libraryindicatoricons");
showhidesidebarlibarary.addEventListener("click", () => {
  parentcontainer.classList.toggle("showhidesidebarlibrary");
  sidenavheadline.forEach((headline) => {
    headline.classList.toggle("active");
  });
  opencloselibraryheadline.classList.toggle("active");
  playlistsbtn.classList.toggle("active");
  sidemenulikesongbox.classList.toggle("active");
  recentactivitycontainer.classList.toggle("active");
  libraryindicatoricons.classList.toggle("active");
  // ============= if the screen is showing the song library left panel then it will show it and hide the current playing songs indicator right panel along with its elements =============
  parentcontainer.classList.remove("showhideleftdetailsarea");
  currentsongscontainer.classList.remove("showhidecurrentsongscontainer");
  currentplayingsongiconindicator.classList.remove("green");
});

let songindex = 0;
// ========================== audio api ==========================
const audioelement = new Audio(`music/${songindex}.mp3`);
const playmusic = document.getElementById("playmusic");
const playmusicgreenbtn = document.getElementById("playmusicgreenbtn");
const musicprogressbar = document.getElementById("musicprogressbar");
const songsitem = document.getElementsByClassName("songsitem");
const speakericon = document.querySelector(".speakericon i");
const songitemplay = document.getElementsByClassName("songitemplay");
const currentplayingsongtitle = document.getElementsByClassName(
  "currentplayingsongtitle"
);
const currentplayingmusicphoto = document.getElementsByClassName(
  "currentplayingmusicphoto"
);
const currentplayingsongalbum = document.getElementsByClassName(
  "currentplayingsongalbum"
);
// ========================== songs database ==========================
const songsdatabase = [
  {
    songname: "Babydoll",
    filepath: "music/0.mp3",
    coverpath: "images/babydolllabel.png",
    minicoverpath: "images/babydollmini.png",
    albumname: "Ari Abdul",
  },
  {
    songname: "Metamorphosis",
    filepath: "music/1.mp3",
    coverpath: "images/metamorphosislabel.png",
    minicoverpath: "images/metamorphosismini.png",
    albumname: "Metamorphosis",
  },
  {
    songname: "Shootout",
    filepath: "music/2.mp3",
    coverpath: "images/shootoutlabel.png",
    minicoverpath: "images/shootoutmini.png",
    albumname: "Shootout",
  },
  {
    songname: "Tourner Dans La Vide",
    filepath: "music/3.mp3",
    coverpath: "images/tournerlabel.png",
    minicoverpath: "images/tournermini.png",
    albumname: "Mini World",
  },
  {
    songname: "Transgender",
    filepath: "music/4.mp3",
    coverpath: "images/transgenderlabel.png",
    minicoverpath: "images/transgendermini.png",
    albumname: "(|||)",
  },
];

// ====================== songs colum details from songsdatabase ======================
let songitemgroup = Array.from(songsitem);
songitemgroup.forEach((element, index) => {
  element.getElementsByClassName("songpic")[0].src =
    songsdatabase[index].minicoverpath;
  element.getElementsByClassName("songname")[0].innerText =
    songsdatabase[index].songname;
  element.getElementsByClassName("albumname")[0].innerText =
    songsdatabase[index].albumname;
});

// ====================== play pause music ======================
playmusic.addEventListener("click", () => {
  if (audioelement.duration <= 0 || audioelement.paused) {
    playmusic.classList.remove("fa-play");
    playmusic.classList.add("fa-pause");
    speakericon.style.opacity = "1";
    audioelement.play();
  } else {
    playmusic.classList.add("fa-play");
    playmusic.classList.remove("fa-pause");
    speakericon.style.opacity = "0";
    audioelement.pause();
  }
});

// ====================== play pause music green icon ======================
playmusicgreenbtn.addEventListener("click", () => {
  if (audioelement.duration <= 0 || audioelement.paused) {
    speakericon.style.opacity = "1";
    playmusic.classList.remove("fa-play");
    playmusic.classList.add("fa-pause");
    audioelement.play();
  } else {
    speakericon.style.opacity = "0";
    playmusic.classList.add("fa-play");
    playmusic.classList.remove("fa-pause");
    audioelement.pause();
  }
});

// ====================== music to work with the progressbar ======================
audioelement.addEventListener("timeupdate", () => {
  let progress = Number.parseInt(
    (audioelement.currentTime / audioelement.duration) * 100
  );
  musicprogressbar.value = progress;
});

// ============ update the progress bar with music if the user changes the current music length ============
musicprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (musicprogressbar.value * audioelement.duration) / 100;
});

// ====================== highlight the current playing music ======================
const highlightcurrentplayingmusic = () => {
  allsongitemplay.forEach((element) => {
    let unhighlight = element.nextElementSibling.lastElementChild;
    unhighlight.classList.remove("highlightcurrentplayingmusic");
    speakericon.style.opacity = 0;
    // show the music information of the current playing song
    let currentplayingsongtitlegroup = Array.from(currentplayingsongtitle);
    currentplayingsongtitlegroup[0].innerText =
      songsdatabase[songindex].songname;
    currentplayingsongtitlegroup[1].innerText =
      songsdatabase[songindex].songname;
    let currentplayingmusicphotogroup = Array.from(currentplayingmusicphoto);
    currentplayingmusicphotogroup[0].src = songsdatabase[songindex].coverpath;
    currentplayingmusicphotogroup[1].src = songsdatabase[songindex].coverpath;
    currentplayingmusicphotogroup[2].src = songsdatabase[songindex].coverpath;
    let currentplayingsongalbumgroup = Array.from(currentplayingsongalbum);
    currentplayingsongalbumgroup[0].innerText =
      songsdatabase[songindex].albumname;
    currentplayingsongalbumgroup[1].innerText =
      songsdatabase[songindex].albumname;
    currentplayingsongalbumgroup[2].innerText =
      songsdatabase[songindex].albumname;
  });
};
const allsongitemplay = Array.from(songitemplay);
allsongitemplay.forEach((element) => {
  element.addEventListener("click", (e) => {
    let highlight = e.target.nextElementSibling.lastElementChild;
    highlightcurrentplayingmusic();
    songindex = Number.parseInt(e.target.id);
    highlight.classList.add("highlightcurrentplayingmusic");
    audioelement.src = `music/${songindex}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    playmusic.classList.remove("fa-play");
    playmusic.classList.add("fa-pause");
    speakericon.style.opacity = 1;
    // show the music information of the current playing song
    let currentplayingsongtitlegroup = Array.from(currentplayingsongtitle);
    currentplayingsongtitlegroup[0].innerText =
      songsdatabase[songindex].songname;
    currentplayingsongtitlegroup[1].innerText =
      songsdatabase[songindex].songname;
    let currentplayingmusicphotogroup = Array.from(currentplayingmusicphoto);
    currentplayingmusicphotogroup[0].src = songsdatabase[songindex].coverpath;
    currentplayingmusicphotogroup[1].src = songsdatabase[songindex].coverpath;
    currentplayingmusicphotogroup[2].src = songsdatabase[songindex].coverpath;
    let currentplayingsongalbumgroup = Array.from(currentplayingsongalbum);
    currentplayingsongalbumgroup[0].innerText =
      songsdatabase[songindex].albumname;
    currentplayingsongalbumgroup[1].innerText =
      songsdatabase[songindex].albumname;
    currentplayingsongalbumgroup[2].innerText =
      songsdatabase[songindex].albumname;
  });
});

// ===================== handle previous next song ===================
const previoussong = document.getElementById("previoussong");
const nextsong = document.getElementById("nextsong");
previoussong.addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioelement.src = `music/${songindex}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  playmusic.classList.remove("fa-play");
  playmusic.classList.add("fa-pause");
  speakericon.style.opacity = 1;
  // show the music information of the current playing song
  let currentplayingsongtitlegroup = Array.from(currentplayingsongtitle);
  currentplayingsongtitlegroup[0].innerText = songsdatabase[songindex].songname;
  currentplayingsongtitlegroup[1].innerText = songsdatabase[songindex].songname;
  let currentplayingmusicphotogroup = Array.from(currentplayingmusicphoto);
  currentplayingmusicphotogroup[0].src = songsdatabase[songindex].coverpath;
  currentplayingmusicphotogroup[1].src = songsdatabase[songindex].coverpath;
  currentplayingmusicphotogroup[2].src = songsdatabase[songindex].coverpath;
  let currentplayingsongalbumgroup = Array.from(currentplayingsongalbum);
  currentplayingsongalbumgroup[0].innerText =
    songsdatabase[songindex].albumname;
  currentplayingsongalbumgroup[1].innerText =
    songsdatabase[songindex].albumname;
  currentplayingsongalbumgroup[2].innerText =
    songsdatabase[songindex].albumname;
});

nextsong.addEventListener("click", () => {
  if (songindex >= 5) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioelement.src = `music/${songindex}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  playmusic.classList.remove("fa-play");
  playmusic.classList.add("fa-pause");
  speakericon.style.opacity = 1;
  // show the music information of the current playing song
  let currentplayingsongtitlegroup = Array.from(currentplayingsongtitle);
  currentplayingsongtitlegroup[0].innerText = songsdatabase[songindex].songname;
  currentplayingsongtitlegroup[1].innerText = songsdatabase[songindex].songname;
  let currentplayingmusicphotogroup = Array.from(currentplayingmusicphoto);
  currentplayingmusicphotogroup[0].src = songsdatabase[songindex].coverpath;
  currentplayingmusicphotogroup[1].src = songsdatabase[songindex].coverpath;
  currentplayingmusicphotogroup[2].src = songsdatabase[songindex].coverpath;
  let currentplayingsongalbumgroup = Array.from(currentplayingsongalbum);
  currentplayingsongalbumgroup[0].innerText =
    songsdatabase[songindex].albumname;
  currentplayingsongalbumgroup[1].innerText =
    songsdatabase[songindex].albumname;
  currentplayingsongalbumgroup[2].innerText =
    songsdatabase[songindex].albumname;
});
