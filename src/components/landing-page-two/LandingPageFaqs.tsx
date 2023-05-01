import styled from "styled-components";
import Form from "../general/Form";
import Fags from "../general/Fags";

type Faq = {
  question: string;
  answer: string;
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
    <Wrapper className="center">
      <h2 className="heading">Frequently Asked Questions</h2>

      {faqs.map((faq: Faq, ind) => {
        return (
          <Fags key={ind} bg="rgba(19, 33, 68, 1)" hover="#162c64" faq={faq} />
        );
      })}

      <div className="faq__footer">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Form />
      </div>
    </Wrapper>
  );
};

export default LandingPageFaqs;

const Wrapper = styled.div`
  max-width: 1065px;
  color: white;
  height: max-content;
  padding: 50px 20px;

  .heading {
    margin-bottom: 20px;
    font-size: clamp(1.8rem, 5vw, 4rem);
    font-weight: 800;
  }

  .faq__footer {
    display: flex;
    flex-direction: column;

    h3 {
      margin-top: 20px !important ;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0px 50px 30px 50px;
  }

  @media screen and (min-width: 1065px) {
    padding: 0px 60px 30px 60px;
  }

  @media screen and (min-width: 1300px) {
    padding: 0px;
  }
`;
