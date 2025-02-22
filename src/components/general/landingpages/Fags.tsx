import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";

type Faq = {
  question: string;
  answer: string;
};

type AnswerProp = {
  $height?: string;
  $bg?: string;
};

type QuestionProp = {
  $show?: boolean;
  $bg?: string;
  $hover?: string;
};

type FaqProps = {
  faq: Faq;
  bg?: string;
  hover?: string;
};

function Fags({ faq: { question, answer }, bg, hover }: FaqProps) {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState("");
  const ParagraphRef = useRef<null | HTMLParagraphElement>(null);

  useEffect(() => {
    function call() {
      if (ParagraphRef.current)
        setHeight(
          `${ParagraphRef.current.getBoundingClientRect().height + 50}px`
        );
    }

    call(); //initial set height on load

    window.addEventListener("resize", call);
    return () => window.removeEventListener("resize", call);
  }, []);

  //  .........
  return (
    <FagsWrapper>
      <Question
        $show={show}
        $bg={bg}
        $hover={hover}
        onClick={() => setShow(!show)}
      >
        <p>{question}</p>

        <span>
          <BsPlusLg className="icon" />
        </span>
      </Question>

      <Answer $height={height} $bg={bg} className={show ? "show" : "hide"}>
        <p ref={ParagraphRef}>{answer}</p>
      </Answer>
    </FagsWrapper>
  );
}

export default Fags;

const Question = styled.div<QuestionProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 7px 15px;
  background-color: ${({ $bg }: QuestionProp) => $bg};
  margin-bottom: 1px;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: ${({ $hover }: QuestionProp) => $hover};
  }

  p,
  span {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 400;
  }

  p {
    text-align: left;
    margin-right: 5px;
    width: 80%;
    justify-self: flex-start;
  }

  span {
    display: block;
    margin-left: 5px;
    padding: 5px;
    cursor: pointer;
    transition: transform 0.25s linear;
    transform: ${({ $show }: QuestionProp) =>
      $show ? `rotate(45deg)` : `rotate(0)`};
  }

  .icon {
    transform: scale(1.5);
  }

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    height: 80px;

    p,
    span {
      font-size: clamp(1.6rem, 2vw, 2.5rem);
    }
  }
`;

const Answer = styled.div<AnswerProp>`
  background-color: ${({ $bg }: AnswerProp) => $bg};
  overflow: hidden;
  transition: height 0.3s linear, padding 0.3s linear;

  p {
    font-size: clamp(1.5rem, 2vw, 1.8rem);
    text-align: left;
    line-height: 3rem;
    font-weight: 400;
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &.show {
    height: ${({ $height }: AnswerProp) => $height};
    padding: 10px 15px;

    p {
      visibility: visible;
      opacity: 1;
    }
  }

  &.hide {
    padding: 0;
    height: 0;
    p {
      visibility: hidden;
      opacity: 0;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    &.show {
      padding: 10px 30px;
    }

    p {
      font-size: 2rem;
    }
  }
`;

const FagsWrapper = styled.div`
  width: clamp(270px, 100%, 1065px);
  margin: 0 auto;
  margin-bottom: 10px;
`;
