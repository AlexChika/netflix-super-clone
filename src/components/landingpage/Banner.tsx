import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";
import { NetflixLogo } from "../../utils/icons";
import { TfiAngleRight } from "react-icons/tfi";

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

          <form>
            <input placeholder="Email address" type="email" name="email" />
            <button className="f items-center justify-center" type="submit">
              Get Started &nbsp; <TfiAngleRight />
            </button>
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

      form {
        display: flex;
        flex-direction: column;
        width: clamp(280px, 50vw, 700px);
        margin-top: 20px;
        gap: 10px;
      }

      input {
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        width: 100%;
        height: 50px;
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
        width: 160px;
        margin: 0 auto;
        margin-top: 20px;
        font-weight: 700;
        height: 40px;
        font-size: clamp(1.4rem, 2vw, 1.8rem);
        border-radius: 5px;
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

        form {
          display: flex;
          flex-direction: row;
          margin-top: 20px;
        }

        input {
          height: 55px;
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
