import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";
import { NetflixLogo } from "../../utils/icons";

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
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <form>
            <input placeholder="Email address" type="email" name="email" />
            <button type="submit">Get Started {">"}</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
const Wrapper = styled.div`
  position: relative;
  height: max-content;

  .banner__image__wrapper {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
      padding: 20px 20px;
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
      padding: 0px 20px 20px 20px;

      h1 {
        font-size: clamp(1.2rem, 8vw, 4rem);
      }

      h3 {
        font-size: clamp(1rem, 5vw, 2.2rem);
        margin-top: 20px;
      }

      form {
        display: flex;
        flex-direction: column;
        width: clamp(280px, 50vw, 900px);
        margin-top: 20px;
      }

      input {
        width: 100%;
        height: 45px;
        background-color: white;
        font-size: 16px;
        padding: 0px 15px;
        &&::placeholder {
          color: gray;
        }
      }

      button {
        background-color: ${({ theme }: { theme: ThemeType }) =>
          theme.primaryRed};
        color: inherit;
        width: 170px;
        margin: 0 auto;
        margin-top: 20px;
        height: 45px;
        font-size: clamp(1.4rem, 25vw, 1.6rem);
      }
    }
  }

  /* media queries */
  @media screen and (min-width: 768px) {
    height: 100vh;

    .banner__content__wrapper {
      .banner__content {
        justify-content: center;

        form {
          display: flex;
          flex-direction: row;
          margin-top: 20px;
        }

        input {
          height: 65px;
        }

        button {
          margin-top: 0px;
          height: 100%;
          width: 250px;
        }
      }
    }
  }
`;
