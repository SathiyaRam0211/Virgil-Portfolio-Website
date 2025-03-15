import styled from "styled-components";
import { colors } from "../constants/variables";

export const AppWrapper = styled.section<{ $bgImage: string }>`
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: url(${(props) => props.$bgImage}) center/cover no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;

  @media (max-width: 1024px) {
    background: ${colors.dark};
  }
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
  padding: 32px 0px;
  width: calc(100vw - 600px);
  border-bottom: 1px solid ${colors.light}30;
  background: ${colors.dark};
  transition: background 0.3s ease-in-out;
  margin: 0px 300px;

  @media (max-width: 1024px) {
    margin: 0px 12px;
    width: calc(100vw - 48px);
    gap: 0px;
    padding: 24px 0px;
  }
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
    $active ? `1px solid ${colors.light}50` : "1px solid transparent;"};
  width: fit-content;
  max-width: 360px;
  text-align: center;
  border-radius: 24px;

  &:hover {
    border: 0.5px solid ${colors.light};
  }

  @media (max-width: 1024px) {
    font-size: 8px;
    padding: 8px;
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
  border-bottom: 1px solid ${colors.light}30;

  @media (max-width: 1024px) {
    padding: 90px 0px 0px;
  }
`;

export const HeaderText = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: ${colors.light};
  line-height: 72px;
  margin-top: 0px;

  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const BodyText = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.light};
  line-height: 32px;

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
  }
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
