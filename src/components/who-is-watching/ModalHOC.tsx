import React, { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

type ModalWrapProp = {
  modal: boolean;
};

type ModalProp = {
  children: ReactNode;
  modal: boolean;
  showModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = (props: ModalProp) => {
  // const { modal, setModal, children } = props;
  const { children, modal, showModal } = props;

  return (
    <ModalWrap modal={modal} className={` `}>
      <div className="modal_body">
        <button onClick={() => showModal(!modal)} className="modal_btn">
          <FaTimes />
        </button>
        <div>{children}</div>
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
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ modal }: ModalWrapProp) => (modal ? "block" : "none")};

  /*  */
  .modal_body {
    position: relative;
    max-width: 360px;
    width: 95%;
    top: 50%;
    left: 50%;
    transform: translateX(-70%) translateY(-70%);
    background: whitesmoke;
    border-radius: 10px;
    /* word-break: break-all; */
    animation: modal 0.3s linear forwards;
    word-wrap: break-word;
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
`;
