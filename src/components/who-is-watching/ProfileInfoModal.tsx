import { useRef } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";

type PropType = {
  show: boolean;
  reCircleBall: () => void;
};

const ProfileInfoModal = (props: PropType) => {
  const { show, reCircleBall } = props;
  const [showModal, setShowModal] = useState(false);

  const FormRef = useRef<null | HTMLDivElement>(null);
  const ResetRef = useRef<null | HTMLDivElement>(null);
  const DeleteRef = useRef<null | HTMLDivElement>(null);

  const handleCloseModal = () => {
    resetSubModal();
    setShowModal(false);
    reCircleBall();
  };

  const openSubModal = (name: string) => {
    if (!ResetRef.current || !DeleteRef.current) return;

    const scroll = (element: HTMLDivElement) => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    };

    if (name === "reset") {
      scroll(ResetRef.current);
    }
    if (name === "delete") {
      scroll(DeleteRef.current);
    }
  }; //delete and reset modal pages
  const resetSubModal = () => {
    if (!FormRef.current) return;
    FormRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }; // reset back "to enter pin" modal page

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

            <FaTimes onClick={handleCloseModal} />
          </Heading>

          <Body className="hide__scroll__bar">
            <Form ref={FormRef}>
              <h3>Enter Your Pin </h3>
              <small>
                Profile is locked...Please enter your secrete pin to continue
              </small>

              <article className="form_input">
                <input placeholder="please enter pin" type="password" />

                <button type="submit">Continue</button>
              </article>
            </Form>

            <Delete ref={DeleteRef}>
              <span>
                <MdDelete />
              </span>
              <h3>Are You sure?</h3>
              <small>
                After deletion, there is no going back. All data will be lost
              </small>
              <div className="button_wrap">
                <button type="submit">Delete</button>
                <button type="button" onClick={resetSubModal}>
                  Cancel
                </button>
              </div>
            </Delete>

            <Reset ref={ResetRef}>
              <h3>Reset pin</h3>

              <form>
                <article>
                  <label htmlFor="oldPin">Old Pin</label>
                  <input
                    name="old pin"
                    id="oldPin"
                    placeholder="please enter pin"
                    type="text"
                  />
                </article>

                <article>
                  <label htmlFor="newPin">new pin</label>
                  <input
                    name="new pin"
                    id="newPin"
                    placeholder="please enter pin"
                    type="text"
                  />
                </article>

                <button type="submit">Continue</button>
              </form>
            </Reset>
          </Body>

          <Footer>
            <div>
              <button onClick={() => openSubModal("delete")}>
                <MdDelete /> &nbsp; Delete Profile
              </button>

              <button onClick={() => openSubModal("reset")}>
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
  width: min(380px, 95vw);
  height: auto;
  background-color: whitesmoke;
  border-radius: 10px;
  overflow: hidden;
  animation: openup 0.7s linear;
  transform-origin: top;
  background: linear-gradient(
    to right,
    #162c64,
    65%,
    ${({ theme }: { theme: ThemeType }) => theme.primaryRed}
  );

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
    color: #162c64;
    color: whitesmoke;
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
    font-size: 2.5rem;
    color: #162c64;
    cursor: pointer;
    transition: color 0.3s linear;
  }

  svg:hover {
    color: whitesmoke;
  }
`;

const Body = styled.div`
  max-width: 90%;
  margin: 0 auto;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;

  /* general styles for all elements wrapped by body */
  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: whitesmoke;
  }

  small {
    color: whitesmoke;
    opacity: 0.75;
    width: 90%;
    margin: 0 auto;
    display: block;
    padding: 7px 0px;
  }
`;

const Delete = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 4rem;
    color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
  }

  .button_wrap {
    display: flex;
    gap: 10px;
    margin-top: 7px;
  }

  button {
    width: 100px;
    background: linear-gradient(whitesmoke, #162c64);
    color: #162c64;
    border-radius: 10px;
    color: whitesmoke;
    height: 37px;
    transition: all 0.3s linear;
  }

  button:hover {
    color: #162c64;
  }

  button:first-of-type {
    background: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
  }
`;

const Form = styled.div`
  min-width: 100%;
  padding: 15px 0px;
  margin-top: 20px;

  .form_input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    height: unset;
  }

  button {
    width: 95px;
    background: linear-gradient(whitesmoke, #162c64);
    color: #162c64;
    border-radius: 10px;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 37px;
    transition: all 0.3s linear;
  }

  button:hover {
    color: #162c64;
  }

  input {
    width: calc(100% - 100px);
    height: 37px;
    border-radius: 10px;
    border: 2px solid whitesmoke;
    color: whitesmoke;
    padding: 0px 10px;

    &::placeholder {
      color: whitesmoke;
    }
  }
`;

const Reset = styled.div`
  text-align: left;
  min-width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  article {
    margin: 10px 0px;
    display: flex;
    align-items: center;
  }

  label {
    padding: 0px 10px;
    display: block;
    font-size: 15px;
    font-weight: 500;
    color: whitesmoke;
    width: max-content;
  }

  input {
    flex: 1;
    height: 37px;
    border-radius: 10px;
    background-color: rgba(3, 3, 3, 0.3);
    color: whitesmoke;
    padding: 0px 10px;
    display: block;

    &::placeholder {
      color: gray;
    }
  }

  button {
    width: 100%;
    background: linear-gradient(whitesmoke, #162c64);
    color: #162c64;
    border-radius: 10px;
    color: whitesmoke;
    height: 37px;
    transition: all 0.3s linear;
    display: block;
    margin: 0 auto;
  }

  button:hover {
    color: #162c64;
  }
`;

const Footer = styled.div`
  border-top: 1px solid gray;
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
    color: whitesmoke;
    opacity: 0.75;
  }

  button:hover {
    color: white;
    opacity: 1;
  }
`;
