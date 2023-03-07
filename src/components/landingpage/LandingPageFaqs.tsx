import styled from "styled-components";
import { TfiClose, TfiPlus, TfiAngleRight } from "react-icons/tfi";
import { useEffect, useRef, useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

type AnswerType = {
  height?: string;
};

const faqs: Faq[] = [
  {
    question: "What can I watch on Netflix?",
    answer: `Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.
    Check out some of our content.`,
  },
  {
    question: "What is Netflix?",
    answer: `Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!`,
  },
  {
    question: "How much does Netflix cost?",
    answer: `Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from €7,99 to €15,99 a month. No extra costs, no contracts.`,
  },
  {
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    question: "How do I cancel?",
    answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.`,
  },
  {
    question: "Is Netflix good for children?",
    answer: `The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.

Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.`,
  },
];

const LandingPageFaqs = () => {
  return (
    <Wrapper>
      <h2 className="heading">Frequently Asked Questions</h2>

      {faqs.map((faq: Faq, ind) => {
        return <QuestionAndAnser key={ind} faq={faq} />;
      })}

      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form>
        <input placeholder="Email address" type="email" name="email" />
        <button className="f items-center justify-center" type="submit">
          Get Started &nbsp; <TfiAngleRight />
        </button>
      </form>
    </Wrapper>
  );
};

function QuestionAndAnser({ faq: { question, answer } }: { faq: Faq }) {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState("");
  const ParagraphRef = useRef<null | HTMLParagraphElement>(null);

  useEffect(() => {
    if (ParagraphRef.current)
      setHeight(
        `${ParagraphRef.current.getBoundingClientRect().height + 50}px`
      );
  }, []);

  //  .........
  return (
    <QuestionWrapper>
      <Question onClick={() => setShow(!show)}>
        <p>{question}</p>

        <span>{show ? <TfiClose /> : <TfiPlus />}</span>
      </Question>

      <Answer height={height} className={show ? "show" : "hide"}>
        <p ref={ParagraphRef}>{answer}</p>
      </Answer>
    </QuestionWrapper>
  );
}

export default LandingPageFaqs;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 10px 15px;
  background-color: #3a3a3a;
  margin-bottom: 1px;

  p,
  span {
    font-size: clamp(1.5rem, 10vw, 1.8rem);
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
  }

  @media screen and (min-width: 768px) {
    padding: 10px 30px;

    p,
    span {
      font-size: 2.5rem;
    }
  }
`;

const Answer = styled.div<AnswerType>`
  background-color: #3a3a3a;
  overflow: hidden;

  p {
    font-size: clamp(1.5rem, 10vw, 1.8rem);
    text-align: left;
    line-height: 3rem;
    font-weight: 400;
  }

  &.show {
    height: ${({ height }) => height};
    padding: 10px 15px;
    visibility: visible;
  }

  &.hide {
    padding: 0;
    height: 0;
    transition: height 0.3s linear, padding 0.3s linear;
    p {
      visibility: hidden;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    &.show {
      padding: 10px 30px;
    }

    p {
      font-size: 2.5rem;
    }
  }
`;

const QuestionWrapper = styled.div`
  max-width: 815px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  background-color: #000000;
  align-items: center;
  color: white;
  text-align: center;
  height: max-content;
  padding: 50px 20px;

  .heading {
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 815px;
  }

  h3 {
    margin: 0 auto;
    margin-top: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: clamp(280px, 50vw, 900px);
    margin: 0 auto;
    margin-top: 30px;
  }

  input {
    width: 100%;
    height: 55px;
    background-color: white;
    font-size: 16px;
    padding: 0px 15px;
    &&::placeholder {
      color: gray;
    }
  }

  button {
    background-color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
    color: inherit;
    width: 170px;
    margin: 0 auto;
    margin-top: 20px;
    height: 45px;
    font-size: clamp(1.4rem, 25vw, 1.6rem);
  }

  @media screen and (min-width: 768px) {
    form {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
    }

    input {
      height: 65px;
    }

    button {
      margin-top: 0px;
      height: 65px;
      width: 250px;
    }
  }
`;
