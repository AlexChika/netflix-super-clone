import styled from "styled-components";
import { NetflixLogo } from "../../../utils/icons";

const Nav = () => {
  return (
    <Wrapper className="landing__page__nav">
      <span>
        <NetflixLogo class="logo" color="#e50914" />
      </span>

      <button>Sign in</button>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 85px;
  width: 100%;

  .logo {
    width: clamp(9rem, 20vw, 14rem);
    cursor: pointer;
  }

  button {
    background-color: ${({ theme }) => theme.primaryRed};
    border-radius: 4px;
    padding: 8px 15px;
    color: inherit;
    font-size: clamp(1.4rem, 25vw, 1.6rem);
  }

  @media screen and (min-width: 768px) {
    padding: 40px 50px;
  }

  @media screen and (min-width: 1200px) {
    padding: 40px 70px;
  }
`;
