import { useState } from "react";
import LandingPageOne from "../components/landing-page-one";
import LandingPageTwo from "../components/landing-page-two";
import LandingPageThree from "../components/landing-page-three";

const LandingPage = () => {
  const [num] = useState(Math.floor(Math.random() * 2));

  return (
    <>
      {num === 0 && <LandingPageOne />}

      {num === 1 && <LandingPageTwo />}

      {num === 2 && <LandingPageThree />}
    </>
  );
};

export default LandingPage;
