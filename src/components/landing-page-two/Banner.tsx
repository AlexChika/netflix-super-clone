import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";
import Form from "../general/Form";
import Nav from "../general/Nav";

const { BannerImage2 } = getImage();

const Banner = () => {
  return (
    <Wrapper role="banner">
      <div className="banner__image__wrapper">
        <img src={BannerImage2} alt="landing page banner" />
      </div>

      <div className="banner__content__wrapper">
        <Nav />

        <div className="banner__content center">
          <h2>Unlimited movies, TV shows, and more.</h2>

          <h3 style={{ marginBottom: "20px" }}>
            Watch anywhere. Cancel anytime.
          </h3>

          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>

          <Form />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
const Wrapper = styled.div`
  position: relative;
  /* z-index: 5; */
  height: max-content;
  border-bottom: 8px solid #222;
  background: linear-gradient(
    103.24deg,
    rgba(0, 8, 29, 0.9) 23.83%,
    rgba(0, 8, 29, 0.3) 96.1%
  );

  .banner__image__wrapper {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      object-fit: cover;
    }
  }

  .banner__content__wrapper {
    position: relative;
    z-index: 2;
    color: white;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      103.24deg,
      rgba(0, 8, 29, 0.9) 23.83%,
      rgba(0, 8, 29, 0.3) 96.1%
    );

    .banner__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      height: calc(100% - 85px);
      max-width: 1065px;
      text-align: center;
      padding: 0px 10px 20px 10px;

      h2 {
        max-width: 800px;
        font-size: clamp(1.2rem, 7vw, 7rem);
        text-align: left;
      }

      h3 {
        font-size: clamp(1rem, 5vw, 2.3rem);
        text-align: left;
        max-width: max-content;
        margin-bottom: 10px;
      }

      h4 {
        font-size: clamp(0.9rem, 5vw, 1.9rem);
        text-align: left;
        max-width: max-content;
      }
    }
  }

  /* media queries */
  @media screen and (min-width: 600px) {
    .banner__content__wrapper {
      .banner__content {
        padding: 0px 20px 20px 20px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 100vh;

    .banner__content__wrapper {
      .banner__content {
        justify-content: center;
        margin-top: -60px;
        padding: 0px 30px 30px 30px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 100vh;

    .banner__content__wrapper {
      .banner__content {
        justify-content: center;
        margin-top: -60px;
        padding: 0px 50px 30px 50px;
      }
    }
  }

  @media screen and (min-width: 1065px) {
    .banner__content__wrapper {
      .banner__content {
        padding: 0px 60px 30px 60px;
      }
    }
  }

  @media screen and (min-width: 1300px) {
    .banner__content__wrapper {
      .banner__content {
        padding: 0px;
        margin-top: -80px;
      }
    }
  }
`;
