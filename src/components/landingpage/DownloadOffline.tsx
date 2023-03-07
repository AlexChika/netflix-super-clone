import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";
const { DownloadOfflineImage, StrangerThingsImage, DownloadAnimationGif } =
  getImage();

const DownloadOffline = () => {
  return (
    <Wrapper>
      <div className="image__animation__wrapper">
        <div className="image__wrapper">
          <img src={DownloadOfflineImage} alt="download offline" />
        </div>

        <div className="animation__wrapper">
          <div className="animation__box">
            {/* movie image */}
            <div className="movie__image">
              <img src={StrangerThingsImage} alt="strager things" />
            </div>

            {/* movie name content */}
            <div className="text_container">
              <p>Stranger Things</p>
              <small>Downloading ...</small>
            </div>

            {/* animation gif */}
            <div className="gif__image">
              <img src={DownloadAnimationGif} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="text__wrapper">
        <h2>Download your shows to watch offline.</h2>
        <h3>Save your favorites easily and always have something to watch.</h3>
      </div>
    </Wrapper>
  );
};

export default DownloadOffline;
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
  }

  .image__animation__wrapper {
    position: relative;
    margin-bottom: 40px;

    .image__wrapper {
      position: relative;
    }

    .animation__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;

      .animation__box {
        width: max(170px, 55%);
        height: max(25%, 50px);
        margin: 0 auto;
        padding: 8px 15px;
        background-color: black;
        align-self: flex-end;
        margin-bottom: 6%;
        border-radius: 12px;
        border: 2px solid gray;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .movie__image {
          width: 22%;
          height: 100%;
          margin-right: 15px;
        }

        .gif__image {
          height: 100%;
        }

        .text_container {
          p {
            font-size: clamp(1rem, 3vw, 1.6rem);
          }

          small {
            color: blue;
            font-size: clamp(0.9rem, 2vw, 1.6rem);
          }
        }
      }
    }
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    padding: 50px 30px;
  }
`;
