import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #333646;
  }

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-thin.ttf") format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Regular.ttf") format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Medium.ttf") format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Bold.ttf") format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Semibold.ttf") format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-ExtraBold.ttf") format('truetype');
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Black.ttf") format('truetype');
  font-weight: 900;
  font-style: normal;
}
`;

export default GlobalStyle;
