import { body, btnToggle } from "./handlers";

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme-dark");

    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add("theme-light")
    }
});

btnToggle.addEventListener('click', () => {
    const isDark = body.classList.contains("theme-dark");

    if (isDark) {
        body.classList.replace("theme-dark", "theme-light");
        localStorage.setItem("theme", "theme-light");
    } else {
        body.classList.replace("theme-light", "theme-dark");
        localStorage.setItem("theme", "theme-light")
    }
});
