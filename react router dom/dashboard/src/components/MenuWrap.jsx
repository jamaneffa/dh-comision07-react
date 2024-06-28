import {Link} from 'react-router-dom'

import './MenuWrap.css'

import logoDh from "../assets/img/logo-dh.png";

export default function MenuWrap() {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  return (
    <header className="menu-wrap">
      <Link to="/">
      <figure className="user">
        <div className="user-avatar">
          <img src={logoDh} alt="Logo Digital House" />
        </div>
        <figcaption>Digital House</figcaption>
      </figure>
      </Link>
      <nav>
        <section className="dicover">
          <h3>Opciones</h3>
          <ul>
            <li>
              <Link to="#">
                <i className="bi bi-film" style={iconStyle}></i>- Películas
              </Link>
            </li>
            <li>
              <Link to="/pre-sale">
                <i className="bi bi-play-circle" style={iconStyle}></i>- Pre Venta
              </Link>
            </li>
            <li>
              <Link to="/genres">
                <i className="bi bi-person" style={iconStyle}></i>- Géneros
              </Link>
            </li>
            <li>
              <Link to="/most-populars">
                <i className="bi bi-bar-chart"></i>- Más Populares
              </Link>
            </li>
            <li>
              <Link to="/next-releases">
                <i className="bi bi-tags"></i>- Proximos Estrenos
              </Link>
            </li>
            <li>
              <Link to="/statistics">
                <i className="bi bi-graph-up"></i>- Estadísticas
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
