import styled from "styled-components";
import cjimage from "../images/chinthujan.png";
import github from "../images/github.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";
import { mediaQueries, mediaQueriesBetween } from "../utils/mediaQueries";

const Hero = () => (
  <OuterContainer id="about-me">
    <InnerContainer>
      <HeroRight>
        <HeroImage img={cjimage} />
      </HeroRight>
      <HeroLeft>
        <Text>
          Hi, my name is <WhiteText>Chinthujan Nandakumar</WhiteText> (but I
          also go by CJ) and I’m a <WhiteText>26 year old</WhiteText> based out
          of Toronto, Ontario (Canada). I’m a{" "}
          <WhiteText>web developer</WhiteText>, a{" "}
          <WhiteText>UX designer</WhiteText>, and a wannabe{" "}
          <WhiteText>director</WhiteText> with a love for everything{" "}
          <WhiteText>frontend</WhiteText> 
          and <WhiteText>creative</WhiteText>. Although my academic background
          is in <WhiteText>Computer Science</WhiteText>, I’m actively looking to
          shift my career path towards both a more challenging and people-facing
          role. Creating this website as a{" "}
          <WhiteText>personal portfolio</WhiteText> is the{" "}
          <WhiteText>first step on my journey</WhiteText> towards that goal -
          <WhiteText> connect with me</WhiteText> on any of the following to
          join me on it:
        </Text>
        <IconContainer>
        <Link href="https://www.youtube.com/cjvslife" target="_blank"><Icon icon={youtube} /></Link>
        <Link href="https://www.linkedin.com/in/chinthujann/" target="_blank"><Icon icon={linkedin} /></Link>
        <Link href="https://github.com/chinthujan" target="_blank"><Icon icon={github} /></Link>

        </IconContainer>
      </HeroLeft>
    </InnerContainer>
  </OuterContainer>
);

export default Hero;

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 48px 0;
  font-family: "Gilroy";
`;

const InnerContainer = styled.div`
  max-width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const HeroRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  ${mediaQueries("sm")`
    width: 90%;
  `};

  ${mediaQueries("md")`
    width: 50%;
  `};
  ${mediaQueries("lg")`
    width: 50%;
  `};
  ${mediaQueriesBetween("xs", "sm")`
    width: 100%;
  `};
`;

const HeroLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries("sm")`
    width: 90%;
  `};
  ${mediaQueries("md")`
    width: 70%;
  `};
  ${mediaQueries("lg")`
    width: 90%;
  `};

  ${mediaQueriesBetween("xs", "sm")`
    width: 100%;
  `};
`;

const Text = styled.p`
  color: #656773;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
`;

const WhiteText = styled.span`
  color: #fff;
`;

const HeroImage = styled.img.attrs((props) => ({
  src: props.img,
}))`
  width: 100%;
`;

const IconContainer = styled.div`
  margin-top: 24px;
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.img.attrs((props) => ({
  src: props.icon,
}))`
  height: 24px;
`;

const Link = styled.a`
 text-decoration: none;
`;
