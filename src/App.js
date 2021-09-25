import "./styles.css";
import { useState } from "react";
const genreDictionary = {
  Action: [
    "Godzilla vs. Kong",
    "Boss Level",
    "Mortal Kombat",
    "Those Who Wish Me Dead",
    "F9"
  ],
  Drama: ["	Avengers: Endgame", "Parasite"]
};
const genre = Object.keys(genreDictionary);
export default function App() {
  const [movies, setMovies] = useState([]);
  function genreClickHandler(item) {
    var movies = genreDictionary[item];
    setMovies(movies);
  }
  return (
    <div className="App">
      <h1>Movie Recomendation App</h1>
      <h2>Select Your Genre</h2>
      {genre.map((item) => {
        return (
          <span
            onClick={() => genreClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
      <ul>
        {movies.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
