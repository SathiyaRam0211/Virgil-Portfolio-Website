import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SectionWrapper,
  HeaderText,
  BodyText,
  HighlightText,
  Cursor,
} from "../utils/util-styles";
import { greetings } from "../constants/variables";
import ProfilePicture from "../assets/ProfilePicture.jpeg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  box-sizing: border-box;
  padding-top: 24px;

  @media (max-width: 1024px) {
    padding: 0px 24px;
    flex-direction: column;
    height: 100%;
    width: 100vw;
  }
`;

const TextContainer = styled.div`
  @media (max-width: 1024px) {
    width: calc(100vw - 48px);
  }
`;

const ImageContainer = styled.div`
  width: 320px;
  height: 320px;
  overflow: hidden;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 320px;
    height: 320px;
  }
`;

const Home = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="home">
      <HeaderContainer>
        <ImageContainer>
          <img src={ProfilePicture} alt="Virgil-Garrett" />
        </ImageContainer>
        <TextContainer>
          <HeaderText>
            {greetings[greetingIndex]}, <br />
            i'm<HighlightText> Virgil Garrett. </HighlightText>
          </HeaderText>
          <BodyText>
            Strategic Communicator <br /> Social Media & Branding Strategist
            <br />
            Media Relations & Crisis Communication Advocate
            <Cursor>|</Cursor>
          </BodyText>
        </TextContainer>
      </HeaderContainer>
    </SectionWrapper>
  );
};

export default Home;
