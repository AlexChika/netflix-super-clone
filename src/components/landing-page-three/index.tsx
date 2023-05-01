import styled from "styled-components";
import Footer from "../general/Footer";
import Banner from "./Banner";
import LandingPageFaqs from "../landing-page-two/LandingPageFaqs";

const LandingPageThree = () => {
  return (
    <Wrapper>
      <Banner />
      {/* <Cards />
       */}
      <LandingPageFaqs />
      <Footer />
    </Wrapper>
  );
};

export default LandingPageThree;
const Wrapper = styled.div`
  /* general styles */
  background: rgba(0, 8, 29, 1);
`;
