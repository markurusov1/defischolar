"use strict";
(() => {
  // <stdin>
  window.toggleTheme = function() {
    let currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    console.log("TOGGLE: Current theme read from HTML:", currentTheme);
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    console.log("TOGGLE: Writing new theme to HTML:", newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("TOGGLE: HTML data-theme attribute is now:", document.documentElement.getAttribute("data-theme"));
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.querySelector(".sun").style.display = newTheme === "dark" ? "block" : "none";
      toggle.querySelector(".moon").style.display = newTheme === "dark" ? "none" : "block";
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", theme);
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.querySelector(".sun").style.display = theme === "dark" ? "block" : "none";
      toggle.querySelector(".moon").style.display = theme === "dark" ? "none" : "block";
      toggle.addEventListener("click", window.toggleTheme);
    }
  });
})();
