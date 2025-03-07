tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0ea5e9",
          dark: "#fbbf24",
        },
      },
    },
  },
};
document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  document.getElementById("darkToggle").addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("darkMode", html.classList.contains("dark"));
  });
  if (
    localStorage.getItem("darkMode") === "true" ||
    (!("darkMode" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
  }

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("hidden");
  });

  
});
