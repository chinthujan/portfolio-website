import styled from "styled-components";

const Work = () => (
  <Background id="work">
    <WorkContainer>
      <Header>My Work</Header>
      <WorkText>
        I’m just going to link my <Link href="https://github.com/chinthujan" target="_blank"><BoldGreen>GitHub</BoldGreen></Link> here for now. 
      </WorkText>
    </WorkContainer>
  </Background>
);

export default Work;

const Background = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WorkContainer = styled.div`
  width: 80%;
  padding: 48px 0px;
  font-family: "Gilroy";
  color: #fff;
`;

const Header = styled.h1`
  font-weight: 900;
  font-size: 32px;
`;

const WorkText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const BoldGreen = styled.a`
  color: #6bc8b5;
  font-weight: 800;
`;

const Link = styled.a`
 text-decoration: none;
`;
