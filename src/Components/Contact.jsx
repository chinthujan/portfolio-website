import styled from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";
import emailjs from "emailjs-com";

const Contact = () => {
  function SendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_po59k0i",
        "template_0wobeyq",
        e.target,
        "user_bA120fY4oVThTySw6EFF7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Background id="contact">
      <ContactContainer>
        <Header>Contact</Header>
        <Text>
          If you’re a potential employer, collaborator, or even a new friend -
          please don’t hesitate to reach out using the submission box below:
        </Text>
      </ContactContainer>
      <FormContainer onSubmit={SendEmail}>
        <FormInput type="text" placeholder="Name" name="from_name" />
        <FormInput type="text" placeholder="E-Mail" name="email" />
        <TextField type="text" placeholder="Message" name="message" />
        <Button type="submit">Send</Button>
      </FormContainer>
    </Background>
  );
};

export default Contact;

const Background = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 0px;
`;

const ContactContainer = styled.div`
  width: 50%;
  font-family: "Gilroy";
  color: #fff;

  ${mediaQueries("sm")`
    width: 80%;
  `};
`;
const FormContainer = styled.form`
  width: 340px;
  font-family: "Gilroy";
  color: #fff;
  margin-top: 24px;
`;

const Header = styled.h1`
  font-weight: 900;
  font-size: 32px;
  text-align: center;
`;
const Text = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

const FormInput = styled.input`
  color: #fff;
  font-weight: 800;
  background-color: transparent;
  font-size: 18px;
  width: 100%;
  padding: 24px;
  border: 2px solid #656773;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 16px;
  ::placeholder {
    font-family: "Gilroy";
    font-weight: 800;
    font-size: 18px;
  }
`;

const TextField = styled.textarea`
  color: #fff;
  height: 160px;
  font-weight: 800;

  background-color: transparent;
  font-size: 18px;
  width: 100%;
  padding: 24px;
  border: 2px solid #656773;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 16px;
  ::placeholder {
    font-family: "Gilroy";
    font-weight: 800;
    font-size: 18px;
  }
`;

const Button = styled.button`
  margin-top: 8px;
  width: 100%;
  border: none;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  background: #6bc8b5;
  border-radius: 4px;
  padding: 24px;
  text-align: center;
`;
