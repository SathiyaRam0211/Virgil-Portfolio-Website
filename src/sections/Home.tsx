import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SectionWrapper,
  HeaderText,
  BodyText,
  HighlightText,
} from "../utils/util-styles";
import { greetings } from "../constants/variables";
import ProfilePicture from "../assets/ProfilePicture.jpeg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
`;

const TextContainer = styled.div``;

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
            I'm<HighlightText> Virgil Garrett. </HighlightText>
          </HeaderText>
          <BodyText>
            Strategic Communicator <br /> Social Media & Branding Strategist
            <br />
            Media Relations & Crisis Communication Advocate
          </BodyText>
        </TextContainer>
      </HeaderContainer>
    </SectionWrapper>
  );
};

export default Home;
