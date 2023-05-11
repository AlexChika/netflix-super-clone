import { useEffect, useState } from "react";
import LandingPageOne from "../components/landing-page-one";
import LandingPageTwo from "../components/landing-page-two";
import LandingPageThree from "../components/landing-page-three";

const LandingPage = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prevNum) => {
        return prevNum + 1 > 2 ? 0 : prevNum + 1;
      });
    }, 6000);

    const stopInterval = () => {
      clearInterval(interval);
    };

    window.addEventListener("click", stopInterval);

    return () => {
      clearInterval(interval);
      window.removeEventListener("click", stopInterval);
    };
  }, []);

  return (
    <>
      {num === 0 && <LandingPageOne />}

      {num === 1 && <LandingPageTwo />}

      {num === 2 && <LandingPageThree />}
    </>
  );
};

export default LandingPage;
