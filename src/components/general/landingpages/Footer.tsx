import styled from "styled-components";
import { FaUserTie, FaBloggerB } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import { SlGlobe, SlSocialInstagram } from "react-icons/sl";
import { MdOutlineApps, MdAddIcCall } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import {
  SiJavascript,
  SiFlutter,
  SiGmail,
  SiOpenai,
  SiReact,
} from "react-icons/si";

const Footer = ({ bg = "rgba(0, 8, 29, 1)" }: { bg?: string }) => {
  return (
    <Wrapper $bg={bg}>
      <div className="content">
        {/* heading */}
        <p>
          Questions? call <a href="tel:+2349024783759">+2349024783759</a>
        </p>

        <section>
          <div className="partA">
            <div>
              <span>
                <h3>Developer</h3>
                <small>
                  <FaUserTie className="icon" />
                </small>
              </span>
              <span>
                <small>
                  <RxDotFilled />
                </small>
                <a href="https://alex.devarise.tech">Alex Chika</a>
              </span>
              <span>
                <small>
                  <RxDotFilled />
                </small>
                <a href="https://alex.devarise.tech">JavaScript Dev</a>
              </span>
              <span>
                <small>
                  <RxDotFilled />
                </small>
                <a href="https://alex.devarise.tech">Flutter dev</a>
              </span>
            </div>

            <div>
              <span>
                <h3>Contacts</h3>
                <small>
                  <IoCall className="icon" />
                </small>
              </span>
              <span>
                <small>
                  <MdAddIcCall />
                </small>
                <a href="tel:+2349024783759">+2349024783759</a>
              </span>
              <span>
                <small>
                  <SiGmail />
                </small>
                <a href="mailto:i.am.alex.chika@gmail.com">
                  i.am.alex.chika@gmail.com
                </a>
              </span>
              <span>
                <small>
                  <SlGlobe />
                </small>
                <a href="https://alex.devarise.tech">alex.devarise.tech</a>
              </span>
            </div>
          </div>

          <div className="partB">
            <div>
              <span>
                <h3>Works </h3>
                <small>
                  <MdOutlineApps className="icon" />
                </small>
              </span>

              <span>
                <small>
                  <SlSocialInstagram />
                </small>
                <a href="https://insta-cloned.vercel.app/">Instagram clone</a>
              </span>
              <span>
                <small>
                  <SiOpenai />
                </small>
                <a href="https://chat-gpt-cloned.vercel.app/">ChatGPT clone</a>
              </span>
              <span>
                <small>
                  <FaBloggerB />
                </small>
                <a href="https://dev-arise-blog.vercel.app/">Dev Blog</a>
              </span>
            </div>

            <div>
              <span>
                <h3>Stacks</h3>
                <small>
                  <GrStackOverflow className="icon" />
                </small>
              </span>
              <span>
                <small>
                  <SiJavascript />
                </small>
                <p>Javascript</p>
              </span>

              <span>
                <small>
                  <SiReact />
                </small>
                <p>React/Nextjs</p>
              </span>
              <span>
                <small>
                  <SiFlutter />
                </small>
                <p>Flutter/Dart</p>
              </span>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div<{ $bg: string }>`
  background-color: ${({ $bg }) => $bg};
  color: rgba(255, 255, 255, 0.7);
  padding: 50px 20px;

  .content {
    margin: 0 auto;
  }

  .icon {
    font-size: clamp(1rem, 5vw, 2.5rem);
    padding: 0;
  }

  h3 {
    margin: 0 !important;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    margin: 0 auto;
    margin-top: 40px;

    .partA,
    .partB {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0px 30px;
      justify-content: flex-start;
      gap: 30px;

      span {
        display: flex;
        height: max-content;
        margin-bottom: 20px;
        align-items: center;
        gap: 7px;
      }

      a {
        text-decoration: underline;
        width: max-content;
      }
    }
  }

  @media screen and (min-width: 600px) {
    padding: 20px 20px 20px 40px;

    section {
      gap: 50px;

      .partA,
      .partB {
        flex-direction: row;
        justify-content: space-between;
        padding: 0px;

        div {
          margin-bottom: 30px;
        }
      }

      .partA > div,
      .partB > div {
        flex: 1;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 20px 50px 30px 50px;
  }

  @media screen and (min-width: 1000px) {
    .content {
      max-width: 1065px;
    }

    section {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1065px) {
    padding: 30px 60px 30px 60px;
  }

  @media screen and (min-width: 1300px) {
    padding: 50px 0px;
  }
`;
