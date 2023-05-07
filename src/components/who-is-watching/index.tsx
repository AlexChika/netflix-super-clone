import React, { useEffect, useState } from "react";
import Axios, { api_url_Paths } from "../../axios";
import styled from "styled-components";
import watchers from "./data";
import getImage from "../../utils/hooks/getImages";

type BallProp = {
  rotate: number;
};

function WhoIsWatching() {
  const { PlusIcon } = getImage();

  const handleAddProfile = () => {
    console.log("hello");
  };

  function handleWatchers(index = 3) {
    // Get watchers from server  ()=>{}:watcher[]
    // const watchers = await getWatchers()
    // const watchersArray = [...watchers]

    // temporal implementation
    let watchersArray = [...watchers].slice(0, index);
    // temporal implementation

    if (watchersArray.length < 3) {
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

  const { watchersArray, deg } = handleWatchers(2); //pass in different numbers to test

  return (
    <Wrapper>
      {/* Title... => Who is watching */}
      <h1>Hello here is title</h1>

      <Container>
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

const Wrapper = styled.div``;

const Container = styled.article`
  max-width: 600px;
  width: 100%;
  height: 330px;
  position: relative;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 320px) {
    height: 370px;
  }

  @media screen and (min-width: 400px) {
    height: 450px;
  }

  @media screen and (min-width: 500px) {
    height: 500px;
  }

  @media screen and (min-width: 768px) {
    height: 550px;
  }

  @media screen and (min-width: 1200px) {
    height: 600px;
  }
`;

const BallContainer = styled.div<BallProp>`
  position: absolute;
  width: 80%;
  height: 80%;
  left: 50%;
  top: 50%;

  &.centerBall {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  transform: translateX(-50%) translateY(-50%)
    rotate(${({ rotate }) => `-${rotate}deg`}); //rotate ballContainer
`;

// The Watcher Image Circle
const Ball = styled.div<BallProp>`
  border-radius: 50%;
  width: 30%;
  height: 30%;
  min-width: 100px;
  min-height: 100px;
  margin: 0 auto;

  .content {
    transform: rotate(${({ rotate }) => `${rotate}deg`}); //reverse-rotate Ball

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
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.3rem;
      width: max-content;
      color: var(--white-color);
    }
  }

  .content.profile {
    border: 2px solid var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 60px;
      width: 60px;
    }
  }

  @media screen and (min-width: 400px) {
    min-width: 120px;
    min-height: 120px;
    width: 34%;
    height: 34%;
  }
`;

// The Add Profile Circle Btn
const BallBtn = styled(Ball)`
  .content {
    cursor: pointer;
    background-color: transparent;
  }
`;
