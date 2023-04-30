import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";
const { ChildrenProfileImage1 } = getImage();

const ChildrenProfile = () => {
  return (
    <Wrapper>
      <div className="image__wrapper">
        <img src={ChildrenProfileImage1} alt="" />
      </div>

      <div className="text__wrapper">
        <h2>Create profiles for children.</h2>
        <h3>
          Send children on adventures with their favourite characters in a space
          made just for them {"–"} free with your membership.
        </h3>
      </div>
    </Wrapper>
  );
};

export default ChildrenProfile;

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
    order: 1;
  }

  .image__wrapper {
    order: 2;
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    padding: 50px 30px;

    .text__wrapper {
      margin-bottom: 0px;
      order: 2;
    }

    .image__wrapper {
      order: 1;
    }
  }
`;
