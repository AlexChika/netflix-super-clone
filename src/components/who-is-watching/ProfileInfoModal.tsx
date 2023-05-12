import styled from "styled-components";
import { useEffect, useState } from "react";
import getImage from "../../utils/hooks/getImages";
const { RedCircularDottedBg } = getImage();

type PropType = {
  show: boolean;
};

const ProfileInfoModal = ({ show }: PropType) => {
  console.log(show);
  console.log(RedCircularDottedBg);
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
          <h1>Hellos</h1>
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
  color: white;
  max-width: 95vw;
  width: min(360px, 95vw);
  aspect-ratio: 1/1;
  border: 2px solid red;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${RedCircularDottedBg});
  background-position: center;
  background-size: contain;

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
