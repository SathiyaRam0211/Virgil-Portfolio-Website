import { useNavigate } from "react-router";
import { HeaderText, HighlightText } from "../utils/util-styles";
import styled from "styled-components";
import Project1 from "../assets/Projects/Project1.jpg";
import Project2 from "../assets/Projects/Project2.jpg";
import Project3 from "../assets/Projects/Project3.jpg";
import Project4 from "../assets/Projects/Project4.jpg";
import Project5 from "../assets/Projects/Project5.jpg";
import Project6 from "../assets/Projects/Project6.jpg";
import Project7 from "../assets/Projects/Project7.jpg";
import { colors } from "../constants/variables";

const projectData = [
  { name: "V", image: Project1 },
  { name: "Jimin", image: Project2 },
  { name: "Jin", image: Project3 },
  { name: "RM", image: Project4 },
  { name: "Jungkook", image: Project5 },
  { name: "Suga", image: Project6 },
  { name: "JHope", image: Project7 },
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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;
  height: calc(100vh - 400px);
  padding: 16px 0px;
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

const ProjectBox = styled.div<{ $size: number }>`
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $size }) =>
    $size === 0
      ? "grid-column: span 2; grid-row: span 2;"
      : "grid-column: span 1; grid-row: span 1;"}

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
            $size={index % 3}
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
