import PropTypes from "prop-types";

export default function Genre(props) {
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action text-center"
    >
      {props.genreName}
    </button>
  );
}

Genre.propTypes = {
  genreName: PropTypes.string.isRequired,
};
