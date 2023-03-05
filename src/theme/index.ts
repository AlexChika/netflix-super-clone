import { createGlobalStyle } from "styled-components";

// few colors are not here beacuse they were used scantly
const theme: ThemeType = {
  primaryRed: "#e50914",
};

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-weight:400;
    -webkit-tap-highlight-color: transparent;
}

html {
  font-size: 62.5%;
}

body{
font-size: 1.6rem;
}

 img{
        width:100%;
        height:100%
    }

    button,input{
      border:none;
      outline:none;
      background-color:transparent;
      cursor: pointer;
    }

.red{
    border: 2px solid red;

}
`;

export default GlobalStyle;
export { theme };
