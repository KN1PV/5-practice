export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

export function loadFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
    return item;
  }
}
