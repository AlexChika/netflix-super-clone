import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";

const { WatchTvImage2 } = getImage();

const WatchOnTv = () => {
  return (
    <Wrapper>
      <div className="image__wrapper">
        <img src={WatchTvImage2} alt="" />
      </div>

      <div className="text__wrapper">
        <h2>Enjoy on your TV.</h2>
        <h3>
          Send children on adventures with their favourite characters in a space
          made just for them {"–"} free with your membership.
        </h3>
      </div>
    </Wrapper>
  );
};

export default WatchOnTv;

const Wrapper = styled.div`
  border-bottom: 2px solid #222;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  height: max-content;
  padding: 50px 20px;

  .text__wrapper {
    margin-bottom: 30px;
    order: 1;
  }

  .image__wrapper {
    order: 2;
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    padding: 40px 30px;

    .text__wrapper {
      margin-bottom: 0px;
    }
  }
`;
