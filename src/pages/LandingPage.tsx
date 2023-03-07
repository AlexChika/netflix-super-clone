import styled from "styled-components";
import Banner from "../components/landingpage/Banner";
import DownloadOffline from "../components/landingpage/DownloadOffline";
import WatchEveryWhere from "../components/landingpage/WatchEveryWhere";
import WatchOnTv from "../components/landingpage/WatchOnTv";

const LandingPage = () => {
  return (
    <Wrapper>
      <Banner />
      <WatchOnTv />
      <DownloadOffline />
      <WatchEveryWhere />
      {/* profile for kidsAD */}
      {/* fags */}
    </Wrapper>
  );
};

export default LandingPage;
const Wrapper = styled.div`
  /* general styles */

  h1 {
    font-size: clamp(1.2rem, 8vw, 4.8rem);
    max-width: 600px;
  }

  h3 {
    font-size: clamp(1rem, 5vw, 2.5rem);
    margin-top: 20px;
    max-width: 600px;
  }
`;
