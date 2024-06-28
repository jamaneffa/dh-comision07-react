import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../../extras/Loader";

import './GenreDetail.css'

export default function GenreDetail() {
  const [genreDetail, setGenreDetail] = useState({});
  const [errorMsgClass, setErrorMsgClass] = useState("hidden")
  const { id } = useParams();

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/genres/${id}`);
        const result = await response.json();
        console.log(result.data);
        setGenreDetail(result.data);
      } catch (error) {
        setGenreDetail({});
        setErrorMsgClass("active")
        console.log("Error:", error);
      }
    };

    if (id) {
      setTimeout(() => fetchGenre(), 3000);
    }
  }, [id]);

  return (
    <div>
      {Object.keys(genreDetail).length !== 0 ? (
        <div>
          <h2>Genero: {genreDetail.name}</h2>
          <p>Ranking: {genreDetail.ranking}</p>
        </div>
      ) : (
        <>
        <Loader/>
        <p className={errorMsgClass}>No hemos podido encontrar la informacion sobre el genero</p>
        </>
      )}
      <div className="button-container">


      <Link to="/genres">
        <button className="return-button">
          Ir a Generos
        </button>
      </Link>
      <Link to="/">
        <button className="return-button">
          Ir a Pagina Principal
        </button>
      </Link>
      </div>
    </div>
  );
}
