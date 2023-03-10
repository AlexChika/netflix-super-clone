import styled from "styled-components";
import { FaUserTie, FaBloggerB } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import { SlGlobe, SlSocialInstagram } from "react-icons/sl";
import { MdOutlineApps, MdAddIcCall } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import {
  SiJavascript,
  SiFlutter,
  SiGmail,
  SiOpenai,
  SiReact,
} from "react-icons/si";

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <p className="heading">
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
                  <GoPrimitiveDot />
                </small>
                <a href="https://i-am-alex.netlify.app">Alex Chika</a>
              </span>
              <span>
                <small>
                  <GoPrimitiveDot />
                </small>
                <a href="https://i-am-alex.netlify.app">JavaScript Dev</a>
              </span>
              <span>
                <small>
                  <GoPrimitiveDot />
                </small>
                <a href="https://i-am-alex.netlify.app">Flutter dev</a>
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
                <a href="https://i-am-alex.netlify.app">
                  https://i-am-alex.netlify.app
                </a>
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

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  background-color: #000000;
  padding: 50px 20px;
  color: rgba(255, 255, 255, 0.7);

  .content {
    max-width: 815px;
    margin: 0 auto;
  }

  .heading {
    padding: 0px 30px;
  }

  .icon {
    font-size: clamp(1rem, 5vw, 2.5rem);
    margin-bottom: -15px;
    padding: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    .partA,
    .partB {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0px 30px;
      justify-content: flex-start;

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
    section {
      .partA,
      .partB {
        flex-direction: row;
        gap: 100px;

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

  @media screen and (min-width: 1000px) {
    section {
      flex-direction: row;
    }
  }
`;
