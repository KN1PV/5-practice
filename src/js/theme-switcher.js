import { THEME } from "./constants";
import { loadFromLocalStorage, saveToLocalStorage } from "./local-storage-api";
import { refs } from "./refs";


export function checkedThemeOnLoad() {
    const savedTheme = loadFromLocalStorage(THEME.KEY);

    if (savedTheme) {
        refs.body.classList.add(savedTheme);
    } else {
        refs.body.classList.add(THEME.LIGHT)
    }
}

export function toggleTheme() {
    const isDark = refs.body.classList.contains(THEME.DARK);

    if (isDark) {
        refs.body.classList.replace(THEME.DARK, THEME.LIGHT);
        saveToLocalStorage(THEME.KEY, THEME.LIGHT);
    } else {
        refs.body.classList.replace(THEME.LIGHT, THEME.DARK);
        saveToLocalStorage(THEME.KEY, THEME.DARK)
    }
}
