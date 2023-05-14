import { useEffect, useState, MouseEvent } from "react";
import styled from "styled-components";
import watchers from "./data";
import getImage from "../../utils/hooks/getImages";
import { TiArrowBack } from "react-icons/ti";
import ProfileInfoModal from "./ProfileInfoModal";
import ManageWatchersModal from "./ManageWatchersModal";

// import { useNavigation } from "react-router-dom";
const { PlusIcon, BlackSlideBg } = getImage();

type BallProp = {
  rotate: number;
};

type CircleCordinate = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

type GetCordinatesReturnType = {
  circleCordinates: CircleCordinate[];
  mouseCordinate: {
    mouseHorizontalPosition: number;
    mouseVerticalPosition: number;
  };
};

function WhoIsWatching() {
  const [max_watchers] = useState(6);
  const [watcher, setWatcher] = useState(0);
  const [watchersArray, setWatchersArray] = useState<Watcher[]>([]);
  const [currentBall, setBall] = useState<null | HTMLElement>(null);
  const [deg, setDeg] = useState(0);
  const [modal, showModal] = useState(false); //add new profile
  // const navigate = useNavigation();

  const handleAddProfile = () => {
    setWatcher(watcher + 1);
    showModal(true);
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

    setDeg(deg);
    setWatchersArray(watchersArray);

    return {
      watchersArray,
      deg,
    };
  }

  function getCircleCodinate(element: HTMLDivElement): CircleCordinate {
    const left = element.getBoundingClientRect().left;
    const right = element.getBoundingClientRect().right;
    const top = element.getBoundingClientRect().top;
    const bottom = element.getBoundingClientRect().bottom;

    return {
      left,
      top,
      right,
      bottom,
    };
  }

  function getCordinates(
    e: MouseEvent,
    circles: HTMLDivElement[]
  ): GetCordinatesReturnType {
    const circleCordinates = circles.map((circle: HTMLDivElement) => {
      return getCircleCodinate(circle);
    }); //an array of circle cordinates

    // MOUSE....
    let mouseHorizontalPosition = e.clientX;
    let mouseVerticalPosition = e.clientY;

    return {
      circleCordinates,
      mouseCordinate: { mouseHorizontalPosition, mouseVerticalPosition },
    };
  }

  function getNearestCirle(
    cordinates: GetCordinatesReturnType,
    circles: HTMLDivElement[]
  ) {
    const { circleCordinates, mouseCordinate } = cordinates;

    const nearestcodinate = circleCordinates.find((circle: CircleCordinate) => {
      if (
        !(mouseCordinate.mouseHorizontalPosition - 15 < circle.left) &&
        !(mouseCordinate.mouseHorizontalPosition + 15 > circle.right) &&
        !(mouseCordinate.mouseVerticalPosition - 15 < circle.top) &&
        !(mouseCordinate.mouseVerticalPosition + 15 > circle.bottom)
      ) {
        return circle;
      }

      return undefined;
    });

    const index = nearestcodinate && circleCordinates.indexOf(nearestcodinate);

    const nearestElement =
      typeof index === "undefined" ? undefined : circles[index];

    return nearestElement;
  }

  function handleProfileClick(e: MouseEvent<HTMLElement>) {
    if (deg === 0) {
      return;
    }

    let container = e.currentTarget;

    const profileCircles = [
      ...container.querySelectorAll<HTMLDivElement>(`[data-id="ball"]`),
    ]; //all balls

    const cordinates = getCordinates(e, profileCircles);

    const ballClicked = getNearestCirle(cordinates, profileCircles);

    if (!ballClicked) return;

    const ballParent = ballClicked.parentElement;
    ballParent!.style.zIndex = "10";
    setBall(ballParent);
    setDeg(0);
  }

  function reCircleBall() {
    if (currentBall) currentBall.style.zIndex = "5";
    handleWatchers(watcher);
  }

  function bb() {
    window.history.back();
  }

  useEffect(() => {
    handleWatchers(watcher);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watcher]);

  // const { watchersArray } = handleWatchers(watcher);

  return (
    <Wrapper rotate={deg}>
      <section className="section">
        <div className="heading">
          <button type="button" onClick={bb}>
            <TiArrowBack />
          </button>
          <h1>Who's watching?</h1>
        </div>

        <Container rotate={deg} onClick={handleProfileClick}>
          {watchersArray.map((watch: Watcher, index) => {
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
                  <Ball data-id="ball" rotate={deg * index}>
                    <div className="content">
                      <img src={watch.image} alt={watch.name} />
                      <p>{watch.name}</p>

                      <ProfileInfoModal
                        reCircleBall={reCircleBall}
                        show={deg === 0}
                      />
                    </div>
                  </Ball>
                )}
              </BallContainer>
            );
          })}
        </Container>
      </section>
      <ManageWatchersModal modal={modal} showModal={showModal} />
    </Wrapper>
  );
}

export default WhoIsWatching;

const Wrapper = styled.main<BallProp>`
  animation: fadeOut 1s linear;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${BlackSlideBg});
  background-position: center;
  background-size: cover;
  background-repeat: space;

  @keyframes fadeOut {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }

  .section {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

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
      z-index: 5;
    }
  }
`;

const Container = styled.article<BallProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  padding: 0;
  margin: 0 auto;
  overflow: ${({ rotate }: BallProp) => (rotate === 0 ? "unset" : "hidden")};

  /* border: 2px solid red; */

  @media screen and (min-width: 768px) {
    max-width: 550px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

const BallContainer = styled.div<BallProp>`
  position: absolute;
  width: 80%;
  height: 80%;
  z-index: 5;

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

    /* This flex stylings centers the p tag and the
    ProfileInfoModal and eliminates the use of
    left and transforms
    */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /*.............................*/

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

      /*........................
      the flex styling makes this unecessart
       left: 50%;
      transform: translateX(-50%);
      ....................... */

      font-size: 1.3rem;
      font-weight: 500;
      width: max-content;
      color: white;
      padding: 0px 30px;
      z-index: 1;
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
