import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";

const { WatchEveryWhereImage2 } = getImage();

const WatchEverywhere = () => {
  return (
    <Wrapper>
      <div className="image__wrapper">
        <img src={WatchEveryWhereImage2} alt="" />
      </div>

      <div className="text__wrapper">
        <h2>Watch everywhere.</h2>
        <h3>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h3>
      </div>
    </Wrapper>
  );
};

export default WatchEverywhere;

const Wrapper = styled.div`
  border-bottom: 2px solid #222;
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
