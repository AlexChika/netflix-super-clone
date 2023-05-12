import React, { ReactNode } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

type ModalWrapProp = {
  modal: boolean;
};

type ModalProp = {
  children: ReactNode;
};

const Modal = (props: ModalProp) => {
  // const { modal, setModal, children } = props;
  const { children } = props;
  let modal = true;

  const setModal = (modal: boolean) => {
    modal = false;
  };

  return (
    <ModalWrap modal={modal} className={` `}>
      <div className="modal_body">
        <button onClick={() => setModal(!modal)} className="modal_btn">
          <FaTimes />
        </button>
        <div className="modal_content">{children}</div>
      </div>
    </ModalWrap>
  );
};
export default Modal;

const ModalWrap = styled.div<ModalWrapProp>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: transparent;
  display: ${({ modal }: ModalWrapProp) => (modal ? "block" : "none")};
  /* background-color: white; */
  /* border: 3px solid yellow; */

  /*  */
  .modal_body {
    position: relative;
    max-width: 500px;
    width: 100%;
    aspect-ratio: 1/1;
    top: 50%;
    left: 50%;
    transform: translateX(-70%) translateY(-70%);
    background: gray;
    border-radius: 15px;
    word-break: break-all;
    /* word-wrap: break-word; */
    animation: modal 0.3s linear forwards;

    border: 2px solid red;
  }

  @keyframes modal {
    100% {
      transform: translateX(-50%) translateY(-50%);
    }
  }

  .modal_body .modal_btn {
    position: absolute;
    right: 20px;
    top: 20px;
    font-weight: 300;
    font-size: 2.5rem;
    color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
  }

  .modal_content {
    width: 100%;
    padding: 0 0.7em 0.7em 0.7em;
  }

  @media screen and (min-width: 768px) {
    .modal_body {
      max-width: 600px;
    }
  }
`;
