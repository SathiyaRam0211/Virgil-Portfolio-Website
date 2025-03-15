import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../constants/variables";
import styled from "styled-components";

const faIconWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  borderRadius: "50%",
  border: `1px solid ${colors.light}`,
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
};

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Social = () => {
  const handleLinkedInRedirect = () => {
    window.open("https://www.linkedin.com/in/virgil-garrett/", "_blank");
  };

  const handleEmailRedirect = () => {
    window.open("mailto:virgishaw09@gmail.com", "_blank");
  };
  return (
    <SocialWrapper>
      <FontAwesomeIcon
        icon={faEnvelope}
        color={colors.light}
        size="xs"
        style={{ ...faIconWrapperStyle }}
        onClick={handleEmailRedirect}
      />
      <FontAwesomeIcon
        icon={faLinkedinIn}
        color={colors.linkedin}
        size="xs"
        style={{ ...faIconWrapperStyle }}
        onClick={handleLinkedInRedirect}
      />
    </SocialWrapper>
  );
};

export default Social;
