import React, { useState } from "react";
import useGif from "../useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} width="500" alt="random gif" />
      <button onClick={fetchGif}>click for new</button>
    </div>
  );
};

export default Random;
