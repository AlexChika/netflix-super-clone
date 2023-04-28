import { useState } from "react";
import LandingPageOne from "../components/landingpageOne";

const LandingPage = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 3));

  return <LandingPageOne />;
  // return (
  //   <>
  //     {num === 0 && <LandingPageOne />}

  //     {num === 1 && <h1>UI Two</h1>}

  //     {num === 2 && <h1>UI three</h1>}
  //   </>
  // );
};

export default LandingPage;
