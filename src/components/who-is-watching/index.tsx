import { useState } from "react";
import styled from "styled-components";
import watchers from "./data";
import getImage from "../../utils/hooks/getImages";
import { TiArrowBack } from "react-icons/ti";
const { PlusIcon } = getImage();

type BallProp = {
  rotate: number;
};

function WhoIsWatching() {
  const [max_watchers] = useState(6);
  const [watcher, setWatcher] = useState(2);

  const handleAddProfile = () => {
    setWatcher(watcher + 1);
  };

  function handleWatchers(index = 3) {
    // Get watchers from server  ()=>{}:watcher[]
    // const watchers = await getWatchers()
    // const watchersArray = [...watchers]

    // temporal implementation
    let watchersArray = [...watchers].slice(0, index);
    // temporal implementation

    if (watchersArray.length < max_watchers) {
      watchersArray = [
        ...watchersArray,
        {
          image: PlusIcon,
          id: "addIcon",
          name: "Add Profile",
          addProfile: true,
        },
      ];
    }

    let deg = 360 / watchersArray.length;

    return {
      watchersArray,
      deg,
    };
  }

  function bb() {}

  const { watchersArray, deg } = handleWatchers(watcher);

  return (
    <Wrapper>
      <div className="heading">
        <button>
          <TiArrowBack />
        </button>
        <h1>Who's watching?</h1>
      </div>

      <Container className="">
        {watchersArray.map((watch, index) => {
          return (
            <BallContainer
              className={`${watchersArray.length === 1 ? "centerBall" : ""}`}
              key={index}
              rotate={deg * index}
            >
              {watch.addProfile ? (
                <BallBtn rotate={deg * index}>
                  <button
                    onClick={handleAddProfile}
                    className="content profile"
                  >
                    <img src={watch.image} alt={watch.name} />
                    <p>{watch.name}</p>
                  </button>
                </BallBtn>
              ) : (
                <Ball rotate={deg * index}>
                  <div className="content">
                    <img src={watch.image} alt={watch.name} />
                    <p>{watch.name}</p>
                  </div>
                </Ball>
              )}
            </BallContainer>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default WhoIsWatching;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .heading {
    position: absolute;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    svg,
    h1 {
      font-weight: 600;
      font-size: clamp(2rem, 5vw, 3.5rem);
    }

    button {
      position: absolute;
      left: 30px;
    }
  }
`;

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;

const BallContainer = styled.div<BallProp>`
  position: absolute;
  width: 80%;
  height: 80%;
  /* border: 1px solid white; */

  &.centerBall {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  transform: rotate(
    ${({ rotate }: BallProp) => `-${rotate}deg`}
  ); //rotate ballContainer

  transition: transform 0.7s linear;
`;

// The Watcher Image Circle
const Ball = styled.div<BallProp>`
  border-radius: 50%;
  width: 25%;
  height: 25%;
  margin: 0 auto;

  .content {
    transform: rotate(
      ${({ rotate }: BallProp) => `${rotate}deg`}
    ); //reverse-rotate Ball

    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    border-radius: inherit;

    /* .............. */
    img {
      width: 100%;
      border-radius: inherit;
      height: 100%;
    }

    p {
      position: absolute;
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.3rem;
      font-weight: 500;
      width: max-content;
      color: white;
    }
  }

  .content.profile {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 40%;
      width: 40%;
    }
  }
`;

// The Add Profile Circle Btn
const BallBtn = styled(Ball)`
  border: 2px solid white;
  .content {
    cursor: pointer;
    background-color: transparent;
  }
`;
