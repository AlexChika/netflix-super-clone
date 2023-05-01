import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";

const { DownloadOfflineImage2 } = getImage();

const DownloadOffline = () => {
  return (
    <Wrapper>
      <div className="image__wrapper">
        <img src={DownloadOfflineImage2} alt="" />
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  height: max-content;
  padding: 20px;

  .text__wrapper {
    order: 1;
  }

  .image__wrapper {
    order: 2;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    padding: 40px 30px;

    .text__wrapper,
    .image__wrapper {
      order: unset;
    }

    .text__wrapper {
      margin-bottom: 0px;
    }
  }
`;
