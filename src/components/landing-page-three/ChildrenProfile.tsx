import styled from "styled-components";
import getImage from "../../utils/hooks/getImages";

const { ChildrenProfileImage2 } = getImage();

const ChildrenProfile = () => {
  return (
    <Wrapper>
      <div className="text__wrapper">
        <h2>Create profiles for kids.</h2>
        <h3>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </h3>
      </div>

      <div className="image__wrapper">
        <img src={ChildrenProfileImage2} alt="" />
      </div>
    </Wrapper>
  );
};

export default ChildrenProfile;

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
