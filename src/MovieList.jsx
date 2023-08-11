import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const MovieList = ({
  movies,
  setMovies,
  score,
  setScore,
  setHighScore,
  highScore,
}) => {
  const [clickedTiles, setClickedTiles] = useState([]);

  const checkGame = (e) => {
    //if e.target is in the list
    const itemExists = clickedTiles.includes(e.target.alt);
    if (itemExists) {
      setClickedTiles([]);
      setScore(0);
      console.log(itemExists);
      return;
    }

    setScore(score + 1);
  };

  useEffect(() => {
    if (score >= highScore) {
      setHighScore(score);
    }
  }, [score]);

  const handleClick = (e) => {
    setMovies(shuffleArray(movies));
    setClickedTiles((prev) => [...prev, e.target.alt]);
    checkGame(e);
    console.log(clickedTiles);
  };

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const shuffledMovies = shuffleArray(movies); // Shuffle the movie array

  const createTiles = (tileList) => {
    return shuffledMovies.map((movie, index) => (
      <div className="" key={index}>
        <img src={movie.poster} alt={movie.title} onClick={handleClick} />
      </div>
    ));
  };

  const tiles = createTiles(shuffledMovies);

  return <StyledMovieList>{tiles}</StyledMovieList>;
};

export default MovieList;

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
