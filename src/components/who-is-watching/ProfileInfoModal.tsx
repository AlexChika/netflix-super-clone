import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";

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
        <Wrapper>
          <Heading>
            <h2>Akinbode</h2>

            <FaTimes />
          </Heading>

          <Form>
            <h3>Enter Your Pin </h3>
            <small>
              Profile is locked...Please enter your secrete pin to continue
            </small>

            <article className="form_input">
              <input placeholder="please enter pin" type="password" />

              <button type="submit">Continue</button>
            </article>
          </Form>

          <Footer>
            <div>
              <button>
                <MdDelete /> &nbsp; Delete Profile
              </button>

              <button>
                <GiSpanner /> &nbsp; Reset Pin
              </button>
            </div>
          </Footer>
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
  overflow: hidden;
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
  padding: 0;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 10px;

  h3 {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 500;
  }

  small {
    color: gray;
    width: 90%;
  }

  .form_input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    height: unset;
  }

  button {
    width: 95px;
    background-color: green;
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 37px;
  }

  input {
    width: calc(100% - 100px);
    height: 37px;
    border-radius: 10px;
    border: 2px solid gray;
    padding: 0px 10px;
  }
`;

const Footer = styled.div`
  border-top: 1px solid gray;
  /* background-color: #dcdcdc; */
  margin-top: 10px;

  div {
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
    padding: 10px 0px;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: gray;
  }

  button:first-of-type:hover {
    color: red;
  }

  button:last-of-type:hover {
    color: #562f88;
  }
`;
