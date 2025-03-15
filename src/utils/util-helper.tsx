export const scrollToSection = (id: string, setActiveSection?: any) => {
  if (setActiveSection && id) setActiveSection(id);
  const section = document.getElementById(id);
  if (section) {
    const y = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
