// ==========================
// FOOTER AUTO YEAR
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const footerText = document.querySelector("footer p");
  if (footerText) {
    footerText.innerHTML =
      "© " + new Date().getFullYear() + " Lycée de Luganville";
  }

  // ==========================
  // TRI ANNONCES PAR DATE
  // ==========================
  const container = document.getElementById("annonces");

  if (container) {
    let annonces = Array.from(container.querySelectorAll(".annonce"));

    annonces.sort((a, b) =>
      b.dataset.date.localeCompare(a.dataset.date)
    );

    container.innerHTML = "";
    annonces.forEach(el => container.appendChild(el));
  }
});


// ==========================
// MENU MOBILE
// ==========================
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("open");
  }
}


// ==========================
// ZOOM IMAGE (GALERIE)
// ==========================
function openImage(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  }
}

function closeImage() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}


// ==========================
// RECHERCHE DOCUMENTS
// ==========================
function searchDocs() {
  const input = document.getElementById("searchInput");
  const items = document.querySelectorAll("#docList li");

  if (!input) return;

  const value = input.value.toLowerCase();

  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(value)
      ? ""
      : "none";
  });
}


// ==========================
// FILTRE CALENDRIER
// ==========================
function filterEvents(type) {
  const rows = document.querySelectorAll("#eventTable tr");

  rows.forEach(row => {
    if (type === "all") {
      row.style.display = "";
    } else {
      row.style.display = row.classList.contains(type)
        ? ""
        : "none";
    }
  });
}


// ==========================
// FILTRE GALERIE (CATÉGORIE)
// ==========================
function filterCategory(category) {
  const photos = document.querySelectorAll(".photo");

  photos.forEach(p => {
    if (category === "all") {
      p.style.display = "block";
    } else {
      p.style.display =
        p.dataset.category === category ? "block" : "none";
    }
  });
}


// ==========================
// TRI GALERIE PAR DATE
// ==========================
function sortByDate(order) {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  const photos = Array.from(gallery.querySelectorAll(".photo"));

  photos.sort((a, b) =>
    order === "new"
      ? b.dataset.date.localeCompare(a.dataset.date)
      : a.dataset.date.localeCompare(b.dataset.date)
  );

  gallery.innerHTML = "";
  photos.forEach(p => gallery.appendChild(p));
}