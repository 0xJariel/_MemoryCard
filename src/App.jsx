import { useEffect, useState } from "react";
import "./App.css";
import { styled } from "styled-components";
import MovieList from "./MovieList";
import Heading from "./Heading";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const tarantinoList = [
    `My Best Friend's Birthday`,
    `Reservoir Dogs`,
    `Pulp Fiction`,
    `Jackie Brown`,
    `Kill Bill: Vol 1`,
    `Kill Bill: Vol 2`,
    `Inglourious Basterds`,
    `Django Unchained`,
    `The Hateful Eight`,
    `	Once Upon a Time in Hollywood`,
  ];

  const [movies, setMovies] = useState([
    {
      Title: "Once Upon a Time in Hollywood",
      Year: "2019",
      imdbID: "tt7131622",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
    },
    {
      Title: "Reservoir Dogs",
      Year: "1992",
      imdbID: "tt0105236",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Pulp Fiction",
      Year: "1994",
      imdbID: "tt0110912",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "My Best Friend's Birthday",
      Year: "1987",
      imdbID: "tt0359715",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2I2NDU1NTMtMDdjMS00NGNkLWEyMGItMzRiMzU2NjQyYzI4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "Kill Bill: Vol. 1",
      Year: "2003",
      imdbID: "tt0266697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
  ]);

  const getMovieRequest = async () => {
    const movieList = [];
    try {
      for (const movie of tarantinoList) {
        const url = `http://www.omdbapi.com/?s=${movie}&apikey=c21da6b2`;
        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.Search) {
          const firstMovie = responseJSON.Search[0];

          if (firstMovie) {
            movieList.push({
              title: firstMovie.Title,
              poster: firstMovie.Poster,
            });
          }
        }

        // setMovies(movieList);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
    setMovies(movieList);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <StyledApp>
      <Heading
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />

      <MovieList
        movies={movies}
        setMovies={setMovies}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: grid;
`;
