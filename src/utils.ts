export function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute("data-color-scheme");
  const newTheme = currentTheme == "dark" ? "light" : "dark";
  window.localStorage.setItem("color-scheme", newTheme);
  root.setAttribute("data-color-scheme", newTheme);
}

export function toggleMenu() {
  const menu = document.querySelector(".menu")!;
  menu.classList.toggle("expanded");
}
