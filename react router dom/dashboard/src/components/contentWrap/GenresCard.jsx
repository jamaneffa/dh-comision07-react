import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function GenresCard(props) {
  return (
    <Link to={`/genres/${props.genre.id}`}>
      <button
        type="button"
        className="list-group-item list-group-item-action text-center"
      >
        {props.genre.name}
      </button>
    </Link>
  );
}

GenresCard.propTypes = {
  genre: PropTypes.object.isRequired,
};
