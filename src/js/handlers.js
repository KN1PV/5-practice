import { checkedThemeOnLoad, toggleTheme } from "./theme-switcher";

export function onDOMContentLoaded() {
    checkedThemeOnLoad();
}

export function onBtnToggleClick() {
    toggleTheme();
}