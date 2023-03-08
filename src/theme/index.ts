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
    font-family:Arial, Helvetica, sans-serif;
}

html {
  font-size: 62.5%;
  -webkit-text-size-adjust: 100%;
}

body{
font-size: 1.6rem;
background-color: #f3f3f3;
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
    .f{
      display:flex;
    }
    .justify-center{
      justify-content:center;
    }
    .items-center{
      align-items:center;
    }


   .red{
    border: 2px solid red;
   }
  .blue{
    border: 2px solid blue;
  }
  .green{
    border: 2px solid green;
  }
`;

export default GlobalStyle;
export { theme };
