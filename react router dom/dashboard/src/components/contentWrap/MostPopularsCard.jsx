import PropTypes from 'prop-types'

export default function MostPopularsCard (props) {
    return (
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={props.movie.image} alt={props.movie.alt} />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{props.movie.name}</h2>
              <p className="bio-position">{props.movie.position}</p>
            </div>
            <div className="box-actions">
              <button>
                <i className="bi bi-star"></i>
              </button>
              <button>
                <i className="bi bi-chat"></i>
              </button>
              <button>
                <i className="bi bi-envelope"></i>
              </button>
            </div>
          </div>
    )
}

MostPopularsCard.propTypes = {
    movie: PropTypes.object.isRequired
};
