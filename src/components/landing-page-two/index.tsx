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
  /* general styles */
  background: rgba(0, 8, 29, 1);

  h2 {
    font-size: clamp(1.2rem, 4vw, 2.5rem);
    max-width: 600px;
    font-weight: 500;
  }

  h3 {
    font-size: clamp(0.9rem, 2vw, 1.5rem);
    margin-top: 10px;
    max-width: 600px;
  }
`;
