import React, { useEffect, useState } from "react";
import Axios, { api_url_Paths } from "../../axios";
import { log } from "console";
import styled from "styled-components";
const name: any = "hello";
const WhoIsWatching = () => {
  // local states....................
  const [movie, setMovie] = useState(null);

  function test() {
    const parsedName = JSON.parse(name);
    console.log(parsedName);
  }

  useEffect(() => {
    async function fetchMovie() {
      const movies = await Axios.get(api_url_Paths.trending);
      const videos = await Axios.get(api_url_Paths.videos);
      console.log(movies);
      console.log(videos);
      // setMovie(movie.data.results)
    }
    fetchMovie();
  }, []);
  //.....................
  return (
    <YoutubeWrapper>
      <h1>WhoIsWatching</h1>
      <button onClick={test}>click</button>

      <article className="youtube">
        <figure className="youtube_con">
          <iframe
            // src={`https://www.youtube.com/embed/${getId(
            //   mealInfo[0].strYoutube
            // )}`}
            src="https://www.youtube.com/embed/dQgKEsKldLk?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </figure>
      </article>
    </YoutubeWrapper>
  );
};

export default WhoIsWatching;

const YoutubeWrapper = styled.div`
  .youtube {
    text-align: center;
    margin-top: 20px;

    .youtube_con {
      margin: 0 auto;
      margin-top: 10px;
      position: relative;

      /* padding-bottom: 10%; */
      aspect-ratio: 16/9;

      width: 95%;
      max-width: 768px;
      border: 2px solid red;

      iframe {
        /* display: none; */
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
`;
