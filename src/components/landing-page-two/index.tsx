import Footer from "../general/landingpages/Footer";
import Banner from "./Banner";
import styled from "styled-components";
import Cards from "./Cards";
import LandingPageFaqs from "./LandingPageFaqs";

const LandingPageTwo = () => {
  return (
    <Wrapper>
      <Banner />
      <Cards />
      <LandingPageFaqs />
      <Footer />
    </Wrapper>
  );
};

export default LandingPageTwo;
const Wrapper = styled.div`
  /* general styles */
  background: rgba(0, 8, 29, 1);
`;
