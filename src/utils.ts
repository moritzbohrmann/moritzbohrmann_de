export const scrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - 120;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
