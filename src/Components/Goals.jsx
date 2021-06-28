import styled from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";

const Goals = () => (
  <Background id="goals">
    <GoalContainer>
      <Header>My Goals</Header>
      <GoalText>
        Professionally, I’d like my career path to develop in one of the
        following two paths:
      </GoalText>
      <Card>
        <CardText>
          Land a role at <BoldGreen>Shopify</BoldGreen> that suits my skillset,
          challenges me, connects me with new friends from all sorts of
          upbringings, and allows me to grow. I’ve read about their space and
          have heard nothing but 10/10 reviews about the company and the work
          culture it provides - so I’m aiming for it.{" "}
        </CardText>
      </Card>
      <Card>
        <CardText>
          Pursue my dream of starting my own production studio through YouTube,
          basing it out of Toronto, and developing it until it can make a
          positive and sincere impact on the world. The thought of being able to
          create jobs for other creative talents and connecting strangers to one
          another for life, all while doing what I love, is something that would
          bring me an immense amount of fulfillment in life.
        </CardText>
      </Card>
      <GoalText>
        Personally, I would love to visit at least 2 different countries this
        year, learn at least 2 different languages (1 human [sign language] & 1
        computer [C++]), and find at least 2 new hobbies.
      </GoalText>
    </GoalContainer>
  </Background>
);

export default Goals;

const Background = styled.div`
  background-color: #252734;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GoalContainer = styled.div`
  width: 80%;
  padding: 48px 0px;
  font-family: "Gilroy";
  color: #fff;
`;

const Header = styled.h1`
  font-weight: 900;
  font-size: 32px;
`;

const GoalText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const BoldGreen = styled.a`
  color: #6bc8b5;
  font-weight: 800;
`;

const Card = styled.div`
  background-color: #424657;
  padding: 32px;
  margin: 16px 48px;
  height: auto;

  ${mediaQueries("sm")`
    margin: 16px 0px;
  `};
`;

const CardText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
`;
