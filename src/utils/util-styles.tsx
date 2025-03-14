import styled from "styled-components";
import { colors } from "../constants/variables";
import backgroundImage from "../assets/Background.jpg";

export const AppWrapper = styled.section`
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: url(${backgroundImage}) center/cover no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  margin: 0px 300px;
  padding: 32px 0px;
  width: calc(100vw - 600px);
  max-width: 100%;
  border-bottom: 0.5px solid ${colors.light}10;
  background: ${colors.dark};
  transition: background 0.3s ease-in-out;
  box-sizing: content-box;
`;

interface NavItemProps {
  $active?: boolean;
}

export const NavItem = styled.div<NavItemProps>`
  box-sizing: border-box;
  cursor: pointer;
  padding: 12px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.light};
  border: ${({ $active }) =>
    $active ? `0.5px solid ${colors.light}` : "0.5px solid transparent;"};
  width: fit-content;
  max-width: 360px;
  text-align: center;
  border-radius: 24px;

  &:hover {
    border: 0.5px solid ${colors.light};
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const SectionWrapper = styled.section`
  padding: 180px 300px 0px;
  min-height: 100vh;
  box-sizing: border-box;
  background: transparent;
`;

export const HeaderText = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: ${colors.light};
  line-height: 72px;
`;

export const BodyText = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.light};
  line-height: 32px;
`;

export const HighlightText = styled.span`
  color: ${colors.primary};
`;

export const Link = styled.a`
  color: ${colors.primary};
  text-decoration: none;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  color: white;
  animation: blink 1s infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;
