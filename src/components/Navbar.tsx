import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarWrapper, NavItem } from "../utils/util-styles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../constants/variables";
import { useState } from "react";

const faIconStyle = {
  cursor: "pointer",
  margin: "0px 12px",
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

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
      const yOffset = 0;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <NavbarWrapper>
      <NavItem
        $active={activeSection === "home"}
        onClick={() => scrollToSection("home")}
      >
        Home
      </NavItem>
      <NavItem
        $active={activeSection === "about"}
        onClick={() => scrollToSection("about")}
      >
        About
      </NavItem>
      <NavItem>Who I Worked For</NavItem>
      <NavItem>Case Study</NavItem>
      <NavItem>Blogs</NavItem>
      <NavItem>PR Talks</NavItem>
      <NavItem>Photography</NavItem>
      <div>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          color={colors.primary}
          size="lg"
          style={faIconStyle}
          onClick={handleLinkedInRedirect}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          color={colors.primary}
          size="lg"
          style={faIconStyle}
          onClick={handleEmailRedirect}
        />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
