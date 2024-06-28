import { useState, useEffect } from "react";
import Genre from "./GenresCard";
import Loader from "../extras/Loader";

export default function Genres() {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/genres");
        const result = await response.json();

        console.log(result.data);

        setGenresList(result.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    setTimeout(() => fetchGenres(), 3000);
    // fetchGenres();
  }, []);

  return (
    <>
      <section className="content">
        <h2 className="mt-3">Géneros</h2>
        <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <button
            // onClick={listGenres}
            type="button"
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Listado de géneros de las películas
          </button>

          {genresList.length === 0 ? (
            <Loader />
          ) : (
            genresList.map((genre) => <Genre key={genre.id} genre={genre} />)
          )}
        </div>
      </section>
    </>
  );
}
