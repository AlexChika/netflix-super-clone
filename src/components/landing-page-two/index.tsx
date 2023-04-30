import Footer from "../general/Footer";
import Banner from "./Banner";
import styled from "styled-components";
import Cards from "./Cards";

const LandingPageTwo = () => {
  return (
    <Wrapper>
      <Banner />
      <Cards />
      <Footer />
    </Wrapper>
  );
};

export default LandingPageTwo;
const Wrapper = styled.div`
  background-color: #a6a6e5;
  /* general styles */
  h2 {
    font-size: clamp(1.2rem, 8vw, 4.8rem);
    max-width: 600px;
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1rem, 5vw, 2.5rem);
    margin-top: 20px;
    max-width: 600px;
  }
`;
