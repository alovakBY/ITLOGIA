"use strict";

const inputText = document.querySelector(".input-name");
const inputAddresss = document.querySelector(".input-address");
const inputTel = document.querySelector(".input-tel");
const button = document.querySelector(".form-button");
const buttonPopup = document.querySelector(".popup-button");
const popup = document.querySelector(".popup");
const popupBg = document.querySelector(".popup-bg");

inputText.addEventListener("input", (e) => {
   if (e.target.value.endsWith("."))
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
});

button.addEventListener("click", (e) => {
   e.preventDefault();
   fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         name: inputText.value,
         address: inputAddresss.value,
         tel: inputTel.value,
      }),
   })
      .then((response) =>
         response.ok ? response.json() : Promise.reject(response)
      )
      .then((json) => {
         popup.classList.remove("hidden");
         popup.classList.add("visible");
         document.body.classList.add("overflow");
         popupBg.classList.remove("hidden");
         popupBg.classList.add("visible");
         console.log(json);
      })
      .catch(() => console.log("error"));
});

buttonPopup.addEventListener("click", () => {
   popup.classList.remove("visible");
   popup.classList.add("hidden");
   popupBg.classList.remove("visible");
   popupBg.classList.add("hidden");
   document.body.classList.remove("overflow");
});

document.addEventListener("DOMContentLoaded", () => {
   new WOW().init();
   GLightbox();
});
