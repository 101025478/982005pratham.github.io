// Name: Pratham Prajapati
// File: main.js
// Date: 09 April 2026
// Description: Image gallery functionality using JavaScript following MDN tutorial
// updated gallery logic

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Image data (MDN requirement)
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// Base URL
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop to create thumbnails (MDN requirement)
for (const image of images) {
  const newImage = document.createElement("img");

  newImage.src = baseURL + image.filename;
  newImage.alt = image.alt;

  thumbBar.appendChild(newImage);

  // Click event
  newImage.addEventListener("click", () => {
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
  });
}

// Darken/Lighten button (MDN requirement)
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    btn.textContent = "Lighten";
    btn.classList.remove("dark");
  } else {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    btn.textContent = "Darken";
    btn.classList.add("dark");
  }
});