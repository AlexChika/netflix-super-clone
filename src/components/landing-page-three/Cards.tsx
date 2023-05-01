import styled from "styled-components";
import WatchEverywhere from "./WatchEverywhere";
import WatchOnTv from "./WatchOnTv";
import ChildrenProfile from "./ChildrenProfile";
import WatchOffline from "./WatchOffline";

const Cards = () => {
  return (
    <Wrapper>
      <section>
        <WatchOnTv />
        <WatchEverywhere />
        <ChildrenProfile />
        <WatchOffline />
      </section>
    </Wrapper>
  );
};

export default Cards;
const Wrapper = styled.div`
  position: relative;
  z-index: 6;
  background-color: transparent;
  background: #090626;
  border-radius: 8px;
  max-width: 1250px;
  margin: 0 auto;
  margin-bottom: 40px;
  color: white;

  section {
    max-width: 1065px;
    margin: 0 auto;
    padding: 0px 20px;
  }

  h2 {
    font-size: clamp(2.5rem, 4.5vw, 4.2rem);
    max-width: 600px;
    font-weight: 800;
  }

  h3 {
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    max-width: 600px;
    font-weight: 500;
    margin-top: 10px;
  }

  @media screen and (min-width: 600px) {
    section {
      padding: 0px 20px 20px 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: -40px;
    margin-bottom: 100px;

    section {
      padding: 0px 50px 30px 50px;
    }
  }

  @media screen and (min-width: 1065px) {
    section {
      padding: 0px 60px 30px 60px;
    }

    h3 {
      font-weight: 600;
    }
  }

  @media screen and (min-width: 1300px) {
    margin-top: -60px;
    section {
      padding: 0px;
    }
  }
`;
