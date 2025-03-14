import {
  SectionWrapper,
  HeaderText,
  BodyText,
  HighlightText,
  Cursor,
  Link,
} from "../utils/util-styles";

const About = () => {
  return (
    <SectionWrapper id="about">
      <HeaderText>
        About Me <HighlightText>:)</HighlightText>
      </HeaderText>
      <BodyText>
        <p>
          I’m a storyteller at heart, passionate about crafting narratives that
          leave a lasting impact. With a background in English and Strategic
          Communication, I blend storytelling with symbolism to create
          meaningful connections.
        </p>
        <p>
          A Boston University Public Relations graduate, I’ve worked with brands
          like Goodwill and Women Changemakers for Education, gaining expertise
          in branding, media relations, and event planning. I thrive on solving
          problems, building strategies, and creating campaigns that truly
          resonate.
        </p>
        <p>
          Here's my
          <Link
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            resume
          </Link>
          <Cursor>|</Cursor>
        </p>
      </BodyText>
    </SectionWrapper>
  );
};

export default About;
