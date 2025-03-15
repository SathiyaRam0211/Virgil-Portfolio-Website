import { useNavigate } from "react-router";
import { HeaderText, HighlightText } from "../utils/util-styles";
import styled from "styled-components";
import Project1 from "../assets/Projects/Project1.jpg";
import Project2 from "../assets/Projects/Project2.jpg";
import Project3 from "../assets/Projects/Project3.jpg";
import Project4 from "../assets/Projects/Project4.jpg";
import Project5 from "../assets/Projects/Project5.jpg";
import { colors } from "../constants/variables";

const projectData = [
  { name: "V", image: Project1 },
  { name: "Jimin", image: Project2 },
  { name: "Jin", image: Project3 },
  { name: "RM", image: Project4 },
  { name: "Jungkook", image: Project5 },
];

const WorksWrapper = styled.section`
  padding: 32px 300px 0px;
  min-height: 100vh;
  box-sizing: border-box;
  background: transparent;
  border-bottom: 1px solid ${colors.light}30;
`;

const ProjectsContainer = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
  height: calc(100vh - 180px);
  padding: 8px 0px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50% 50%;
`;

const ProjectTitle = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${colors.primary}1;
  font-size: 16px;
  font-weight: 500;
  text-shadow: 2px 2px 10px ${colors.dark};
  transition: all 0.3s ease-in-out;
`;

const ProjectBox = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 1;
    ${ProjectTitle} {
      font-size: 20px;
      font-weight: 600;
      transform: translateY(-50%);
      top: 50%;
    }
  }
`;

const Works = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectName: string) => {
    navigate(`/project/${projectName.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <WorksWrapper id="who-i-worked-for">
      <HeaderText>
        Who I Worked For <HighlightText>?</HighlightText>
      </HeaderText>
      <ProjectsContainer>
        {projectData.map((project, index) => (
          <ProjectBox
            key={index}
            onClick={() => handleProjectClick(project.name)}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <ProjectTitle>{project.name}</ProjectTitle>
          </ProjectBox>
        ))}
      </ProjectsContainer>
    </WorksWrapper>
  );
};

export default Works;
