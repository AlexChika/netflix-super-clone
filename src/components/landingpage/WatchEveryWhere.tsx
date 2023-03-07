import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";
const { WatchEveryWhereImage } = getImage();

const WatchEveryWhere = () => {
  return (
    <Wrapper>
      <div className="text__wrapper">
        <h1>Watch everywhere.</h1>
        <h3>
          Stream unlimited films and TV programmes on your phone, tablet, laptop
          and TV without paying more.
        </h3>
      </div>

      <div className="image__video__wrapper">
        <div className="image__wrapper">
          <img src={WatchEveryWhereImage} alt="watch television" />
        </div>

        <div className="video__wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className=""
            src="/watch-everywhere-video.m4v"
          ></video>
        </div>
      </div>
    </Wrapper>
  );
};

export default WatchEveryWhere;

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  height: max-content;
  padding: 50px 20px;

  .text__wrapper {
    margin-bottom: 40px;
  }

  .image__video__wrapper {
    position: relative;

    .image__wrapper {
      position: relative;
      aspect-ratio: 16/9;
      z-index: 3;

      img {
        width: 80%;
      }
    }

    .video__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      video {
        aspect-ratio: 16/9;
        height: calc(100% - 50%);
        margin-top: -16%;
      }
    }
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    padding: 50px 30px;

    .text__wrapper {
      margin-bottom: 0px;
    }
  }
`;
