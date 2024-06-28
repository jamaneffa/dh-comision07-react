import avatar from "../../assets/img/avatar.jpg";
import johnWick from "../../assets/img/john-wick.jpg";
import shazan from "../../assets/img/shazan.jpg";
import sayen from "../../assets/img/sayen.jpg";
import magician from "../../assets/img/the-magicians-elephant.jpg";
import sniper from "../../assets/img/sniper.jpg";

import Movie from "./MostPopularsCard";

export default function MostPopulars() {
  const movies = [
    {
      image: avatar,
      alt: `"Avatar: The Way of Water-image`,
      name: "Avatar: The Way of Water",
      position: "Ciencia Ficcion",
    },
    {
      image: johnWick,
      alt: `"John Wick: Chapter 4-image`,
      name: "John Wick: Chapter 4",
      position: "Accion",
    },
    {
      image: shazan,
      alt: `"Shazam! Fury of the Gods-image`,
      name: "Shazam! Fury of the Gods",
      position: "Fantasia",
    },
    {
      image: sayen,
      alt: `"Sayen-image`,
      name: "Sayen",
      position: "Accion",
    },
    {
      image: magician,
      alt: `"The Magicians Elephant-image`,
      name: "The Magicians Elephant",
      position: "Animacion",
    },
    {
      image: sniper,
      alt: `"Sniper: The White Raven-image`,
      name: "Sniper: The White Raven",
      position: "Guerra",
    },
  ];

  return (
    <section className="content">
      <h2>Más Populares</h2>
      <article className="person-boxes">
        {movies.map((movie, i) => (
          <Movie
            key={i}
			movie={movie}
          />
        ))}
      </article>
    </section>
  );
}
