import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="#">
            FodiFy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active fst-italic" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fst-it" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fst-it" to="/signup">
                  Signup
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;