import styled from "styled-components";
import { useEffect, useState } from "react";
import getImage from "../../utils/hooks/getImages";
import { FaTimes } from "react-icons/fa";
const { RedCircularDottedBg, BlackSlideBg } = getImage();

type PropType = {
  show: boolean;
};

const ProfileInfoModal = ({ show }: PropType) => {
  const [showModal, setShowModal] = useState(false);
  // const wrapperRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (show) setShowModal(true);
    }, 700);

    if (!show) {
      setShowModal(false);
    }

    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <>
      {showModal && show && (
        <Wrapper data-name="modal">
          <Heading data-name="modal">
            <h2 data-name="modal">Akinbode</h2>

            <FaTimes data-name="modal" />
          </Heading>

          <Form data-name="modal">
            <div data-name="modal" className="form_input">
              <label data-name="modal" htmlFor="">
                Please enter secrete
              </label>
              <input data-name="modal" type="password" />
            </div>
          </Form>
        </Wrapper>
      )}
    </>
  );
};

export default ProfileInfoModal;

const Wrapper = styled.div`
  position: absolute;
  z-index: 15;
  bottom: auto;
  margin-top: 107%;
  transform: scale(1);
  color: black;
  max-width: 95vw;
  width: min(360px, 95vw);
  height: auto;
  background-color: whitesmoke;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: space;

  animation: openup 0.7s linear;
  transform-origin: top;

  @keyframes openup {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
  text-align: left;
  position: relative;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    width: max-content;
    font-style: italic;
    padding-top: 3px;
  }

  h2:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0%;
    height: 1px;
    width: 60%;
    border-bottom: 1px solid gray;
  }

  h2:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: calc(-20% - 1px);
    border-bottom-right-radius: 20px;
    width: 40%;
    height: 20%;
    border-bottom: 1px solid gray;
  }

  svg {
    color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
    font-size: 2.5rem;
  }
`;

const Form = styled.form`
  margin-top: 30px;
  /* padding-top: 40px; */
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  /* background-color: rgba(255, 0, 0, 0.1); */
`;
