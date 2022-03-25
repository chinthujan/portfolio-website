import styled from "styled-components";

const Card = () => {
  return (
    <CardContainer>
      <CardBackground>
        <CardTitle>Soft</CardTitle>
        <CardTextContainer>
          <CardText>Communication</CardText>
          <CardText>Leadership</CardText>
          <CardText>Open-mindedness</CardText>
          <CardText>Inquisitive</CardText>
          <CardText>Optimistic</CardText>
        </CardTextContainer>
      </CardBackground>
      <CardBackground>
        <CardTitle>Frontend</CardTitle>
        <CardTextContainer>
          <CardText>HTML5</CardText>
          <CardText>CSS3</CardText>
          <CardText>JavaScript</CardText>
          <CardText>Adobe CC</CardText>
          <CardText>Figma</CardText>
        </CardTextContainer>
      </CardBackground>
      <CardBackground>
        <CardTitle>Backend</CardTitle>
        <CardTextContainer>
          <CardText>Python</CardText>
          <CardText>Java</CardText>
        </CardTextContainer>
      </CardBackground>
      <CardBackground>
        <CardTitle>Databases</CardTitle>
        <CardTextContainer>
          <CardText>MySQL</CardText>
        </CardTextContainer>
      </CardBackground>
      <CardBackground>
        <CardTitle>Creative</CardTitle>
        <CardTextContainer>
          <CardText>Scriptwriting</CardText>
          <CardText>Film making</CardText>
          <CardText>Video editing</CardText>
          <CardText>Audio editing</CardText>
        </CardTextContainer>
      </CardBackground>
    </CardContainer>
  );
};
const Skills = () => (
  <Background id="skills">
    <Container>
      <Header>My Skills</Header>
      <Card />
    </Container>
  </Background>
);

export default Skills;

const Background = styled.div`
  background-color: #252734;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 80%;
  padding-top: 24px;
  padding-bottom: 48px;
`;
const Header = styled.h1`
  font-family: "Gilroy";
  font-weight: 900;
  color: #fff;
  font-size: 32px;
  line-height: 40px;
`;

const CardBackground = styled.div`
  width: 220px;
  height: 273px;
  background-color: #424657;
  border-radius: 4px;
  margin: 8px 8px;
`;

const CardTitle = styled.h1`
  font-size: 32px;
  color: #fff;
  font-family: "Gilroy";
  font-weight: 800;
  text-align: center;
  padding-top: 16px;
`;
const CardTextContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding: 0 32px;
  margin-top: -16px;
`;
const CardText = styled.li`
  font-size: 18px;
  color: #fff;
  font-family: "Gilroy";
  font-weight: 500;
  padding-top: 8px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
