export const getInitialTheme = () => {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const scrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - 120;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
