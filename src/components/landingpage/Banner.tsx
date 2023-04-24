import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";
import { NetflixLogo } from "../../utils/icons";
import Form from "./Form";

const { BannerHeroImage } = getImage();

const Banner = () => {
  return (
    <Wrapper>
      <div className="banner__image__wrapper">
        <img src={BannerHeroImage} alt="banner" />
      </div>

      <div className="banner__content__wrapper">
        <nav className="landing__page__nav">
          <span>
            <NetflixLogo class="logo" color="#e50914" />
          </span>

          <button>Sign in</button>
        </nav>

        <div className="banner__content">
          <h2>Unlimited movies, TV shows, and more.</h2>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <Form />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
const Wrapper = styled.div`
  position: relative;
  height: max-content;
  border-bottom: 8px solid #222;

  .banner__image__wrapper {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      object-fit: cover;
    }
  }

  .banner__content__wrapper {
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;

    .landing__page__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      height: 85px;
      width: 100%;

      .logo {
        width: clamp(9rem, 20vw, 14rem);
      }

      button {
        background-color: ${({ theme }: { theme: ThemeType }) =>
          theme.primaryRed};
        border-radius: 4px;
        padding: 8px 15px;
        color: inherit;
        font-size: clamp(1.4rem, 25vw, 1.6rem);
      }
    }

    .banner__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: calc(100% - 85px);
      text-align: center;
      padding: 40px 20px;

      h2 {
        max-width: 800px;
      }
    }
  }

  /* media queries */
  @media screen and (min-width: 768px) {
    height: 100vh;

    .banner__content__wrapper {
      .landing__page__nav {
        padding: 40px 50px;
      }

      .banner__content {
        justify-content: center;
      }
    }
  }
`;
