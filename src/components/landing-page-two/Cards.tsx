import styled from "styled-components";

const Cards = () => {
  return <Wrapper className="red"></Wrapper>;
};

export default Cards;
const Wrapper = styled.div`
  position: relative;
  height: 200px;
  background-color: transparent;
  z-index: 6;

  @media screen and (min-width: 768px) {
    margin-top: -60px;
  }

  @media screen and (min-width: 1300px) {
    margin-top: -80px;
  }
`;
