import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <p>
          Questions? call <a href="tel:+2349024783759">+2349024783759</a>
        </p>

        <section>
          <div className="partA">
            <div>
              <h3>Developer</h3>
              <span>
                <p>Alex Chika</p>
                <small></small>
              </span>
              <span>
                <p>JavaScript Dev</p>
                <small></small>
              </span>
              <span>
                <p>Flutter dev</p>
                <small></small>
              </span>
            </div>

            <div>
              <h3>Contacts</h3>
              <span>
                <p>+2349024783759</p>
                <small></small>
              </span>

              <span>
                <p>i.am.alex.chika@gmail.com</p>
                <small></small>
              </span>
              <span>
                <p>https://i-am-alex.netlify.app</p>
                <small></small>
              </span>
            </div>
          </div>

          <div className="partB">
            <div>
              <h3>Works</h3>
              <span>
                <p>Instagram clone</p>
                <small></small>
              </span>
              <span>
                <p>ChatGPT clone</p>
                <small></small>
              </span>
              <span>
                <p>Dev Blog</p>
                <small></small>
              </span>
            </div>

            <div>
              <h3>Stacks</h3>
              <span>
                <p>Javascript</p>
                <small></small>
              </span>

              <span>
                <p>React?Nextjs</p>
                <small></small>
              </span>
              <span>
                <p>Flutter/Dart</p>
                <small></small>
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
  color: white;

  .content {
    max-width: 815px;
    margin: 0 auto;
  }

  section {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    .partA,
    .partB {
      display: flex;
      width: 50%;
      justify-content: space-between;
    }
  }
`;
