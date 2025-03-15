import Footer from "../components/Footer";
import {
  SectionWrapper,
  HeaderText,
  BodyText,
  HighlightText,
} from "../utils/util-styles";

const CaseStudy = () => {
  return (
    <SectionWrapper id="case-study">
      <HeaderText>
        Case Study <HighlightText>!</HighlightText>
      </HeaderText>
      <BodyText>To be filled.</BodyText>
      <Footer />
    </SectionWrapper>
  );
};

export default CaseStudy;
