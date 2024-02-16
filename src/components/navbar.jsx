import { Link, NavLink } from "react-router-dom";
import { PROBLEMS_DETAILS } from "../constants";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <div Card className="container-fluid">
        <Link to="/" className="navbar-brand">
          Coding <i className="bi bi-geo-fill"></i> App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {PROBLEMS_DETAILS.map((problem, index) => {
              return (
                <li className="nav-item fw-semibold ">
                  <NavLink to={`problem/${index}`} className="nav-link">
                    {problem.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
