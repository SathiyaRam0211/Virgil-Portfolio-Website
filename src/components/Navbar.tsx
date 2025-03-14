import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarWrapper, NavItem } from "../utils/util-styles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../constants/variables";
import { useEffect, useState } from "react";

const faIconStyle = {
  cursor: "pointer",
  margin: "0px 12px",
};

const SECTIONS = [
  "home",
  "about",
  "who-i-worked-for",
  "case-study",
  "blogs",
  "pr-talks",
  "photography",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0]);

  const handleLinkedInRedirect = () => {
    window.open("https://www.linkedin.com/in/virgil-garrett/", "_blank");
  };

  const handleEmailRedirect = () => {
    window.open("mailto:virgishaw09@gmail.com", "_blank");
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
          onClick={() => scrollToSection(section)}
        >
          {section.replace(/-/g, " ").toUpperCase()}
        </NavItem>
      ))}
      <div>
        <FontAwesomeIcon
          icon={faEnvelope}
          color={colors.light}
          size="lg"
          style={faIconStyle}
          onClick={handleEmailRedirect}
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          color={colors.primary}
          size="lg"
          style={faIconStyle}
          onClick={handleLinkedInRedirect}
        />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
