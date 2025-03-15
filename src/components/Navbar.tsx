import { scrollToSection } from "../utils/util-helper";
import { NavbarWrapper, NavItem } from "../utils/util-styles";
import { useEffect, useState } from "react";

const SECTIONS = [
  "home",
  "about",
  "who-i-worked-for",
  "case-study",
  "blogs",
  // "pr-talks",
  // "photography",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = SECTIONS[0];
      SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarWrapper>
      {SECTIONS.map((section) => (
        <NavItem
          key={section}
          $active={activeSection === section}
          onClick={() => scrollToSection(section, setActiveSection)}
        >
          {section.replace(/-/g, " ").toUpperCase()}
        </NavItem>
      ))}
    </NavbarWrapper>
  );
};

export default Navbar;
