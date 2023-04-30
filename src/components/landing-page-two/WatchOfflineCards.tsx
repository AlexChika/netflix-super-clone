import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";

const { DownloadOfflineImage2 } = getImage();

const WatchEveryWhereCards = () => {
  return (
    <Wrapper>
      {/* image wrapper */}
      <div className="image-wrapper">
        <img src={DownloadOfflineImage2} alt="watch on tv" />
      </div>

      {/* text wrapper */}
      <div className="text-wrapper">
        <h2>Download your shows to watch offline</h2>
        <h3>Save your favorites easily and always have something to watch.</h3>
      </div>
    </Wrapper>
  );
};

export default WatchEveryWhereCards;

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 30px 20px;

  background: radial-gradient(
    99.93% 134.44% at 17.93% 0%,
    #09143c 0%,
    #101338 57.21%,
    #400e20 99.57%
  );
  border-radius: 8px;

  .text-wrapper {
    width: 80%;
  }

  .image-wrapper {
    width: 80%;
  }

  @media screen and (min-width: 600px) {
    width: 49%;
  }

  @media screen and (min-width: 1000px) {
    padding: 30px 30px 40px 30px;
  }
`;
