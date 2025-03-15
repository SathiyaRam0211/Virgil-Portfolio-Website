import styled from "styled-components";
import { colors } from "../constants/variables";
import Social from "./Social";
import { HighlightText, NavItem } from "../utils/util-styles";
import { scrollToSection } from "../utils/util-helper";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: calc(100vw - 600px);
  z-index: 10;
  margin: 0px 300px;
  padding: 32px 0px;
  border-top: 1px solid ${colors.light}30;
  background: ${colors.dark};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <NavItem onClick={() => scrollToSection("home")}>
        Back To Top <HighlightText>↑</HighlightText>
      </NavItem>
      <span>Virgil Garrett ©</span>
      <Social />
    </FooterWrapper>
  );
};

export default Footer;
