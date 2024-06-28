// import Genre from "./Genre";

// export default function Genres () {

// 	const genresList = [
// 		{name : "Acción"},
// 		{name : "Avetura"},
// 		{name : "Animación"},
// 		{name : "Documentales"},
// 		{name : "Drama"},
// 		{name : "Fantasía"},
// 		{name : "Terror"},
// 		{name : "Romance"}
// 	]

//     return (
//         <section className="content">
// 			<h2 className="mt-3">Géneros</h2>
// 			<div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
// 				<button type="button" className="list-group-item list-group-item-action active text-center"
// 					aria-current="true">
// 					Listado de géneros de las películas
// 				</button>

// 				{genresList.map((genre, i) => (
// 					<Genre
// 						key={genre.name + i}
// 						genreName={genre.name}
// 					/>
// 				))}

// 			</div>
// 		</section>
//     )
// }

// Componente de clase con estado

import Genre from "./Genre";

import { Component } from "react";

class Genres extends Component {
  constructor(props) {
    super(props);
    //definicion de variables de estado
    this.state = {
      genresList: [],
    };
  }

  //actualizacion de estado con evento de usuario

  // setGenres() {
  //   this.setState({
  //     genresList : [
  //       {name : "Acción"},
  //       {name : "Avetura"},
  //       {name : "Animación"},
  //       {name : "Documentales"},
  //       {name : "Drama"},
  //       {name : "Fantasía"},
  //       {name : "Terror"},
  //       {name : "Romance"}
  //     ]
  //   })
  // }

  // cleanGenres() {
  //   this.setState({
  //     genresList : []
  //   })
  // }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3001/api/genres");
      const result = await response.json();

      console.log(result.data);

      this.setState({
        genresList: result.data,
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  render() {
    return (
      <section className="content">
        <h2 className="mt-3">Géneros</h2>
        <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <button
            // onClick={()=> this.setGenres()}
            type="button"
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Listado de géneros de las películas
          </button>

          {this.state.genresList.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            this.state.genresList.map((genre) => (
              <Genre key={genre.id} genreName={genre.name} />
            ))
          )}
          {/* <button
            onClick={()=> this.cleanGenres()}
            type="button"
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Limpiar Generos
          </button> */}
        </div>
      </section>
    );
  }
}

export default Genres;
