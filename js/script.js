// toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//  on click menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// on click search
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  e.preventDefault();
};
// click diluar element

const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// destinasi detail
const destinasiDetail = document.querySelectorAll("#destinasi-detail");
for (let i = 0; i < destinasiDetail.length; i++) {
  const element = destinasiDetail[i];
}

const destinasiBtns = document.querySelectorAll(".click-detail");
destinasiBtns.forEach((btn, i) => {
  btn.onclick = (e) => {
    destinasiDetail[i].style.display = "flex";
    e.preventDefault();
  };
});

// click tombol close destinasi detail
const btnsClose = document.querySelectorAll(".close-icon");
btnsClose.forEach((cls, i) => {
  cls.onclick = (e) => {
    destinasiDetail[i].style.display = "none";
    e.preventDefault();
  };
});

// click diluar destinasi detail
window.onclick = (e) => {
  destinasiDetail.forEach((element, i) => {
    if (e.target === element) {
      element.style.display = "none";
      e.preventDefault();
    }
  });
};

const sumbmitForm = document.querySelector("#btn");
document.addEventListener("submit", function (e) {
  alert(
    "Pesan anda telah terkirim, terima kasih telah berkunjung ke wabsite AFTraveling."
  );
  e.preventDefault();
});
