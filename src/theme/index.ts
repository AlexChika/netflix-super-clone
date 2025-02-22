import { DefaultTheme, createGlobalStyle } from "styled-components";
// few colors are not here beacuse they were used scantly
const theme: DefaultTheme = {
  primaryRed: "#e50914",
  bg: "#000000",
};

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-weight:400;
-webkit-tap-highlight-color: transparent;
font-family:Arial, Helvetica, sans-serif;
}

html {
font-size: 62.5%;
-webkit-text-size-adjust: 100%;
}

body{
font-size: 1.6rem;
background-color: black;
direction: ltr;
}

img{
      width:100%;
      height:100%
}

button,input,a{
border:none;
outline:none;
background-color:transparent;
cursor: pointer;
text-decoration:none;
color:inherit;
}


    /* utilities */
.hide__scroll__bar::-webkit-scrollbar {
-webkit-appearance: none;
appearance: none;
display: none;
}

.f{
display:flex;
}
.justify-center{
justify-content:center;
}
.items-center{
align-items:center;
}
.center{
margin:0 auto;
}



  /* @media screen and (max-width: 1000px) {
  ::-webkit-scrollbar {
    width: 3px;
    height: 1px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(88, 88, 88);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(15, 50, 59);
  }
} */

/* @media screen and (min-width: 1000px) {
  ::-webkit-scrollbar {
    width: 5px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: gray;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(88, 88, 88);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(15, 50, 59);
  }
} */
`;

export default GlobalStyle;
export { theme };
