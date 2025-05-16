import { useNavigate, useLocation } from "react-router-dom";
import { useauthContext } from "../../context/authcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useauthContext();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return !isLoggedIn ? (
    <nav className="navbar navbar-expand-md my-BgColorblue px-4 shadow-sm fixed-top pb-0 d-flex ">
      <div className="container-fluid align-content-end">
        
        <h1 className=" fw-bold text-white mb-0 brand-text">RAFEEQ</h1>

      
        <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
          <li className="nav-item">
            <button
              className="btn btn-link nav-link text-light fw-light font-32 pb-0"
              onClick={() => scrollToSection("Home")}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link nav-link text-light fw-light font-32 pb-0"
              onClick={() => scrollToSection("AboutUs")}
            >
              About us
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link nav-link text-light fw-light font-32 pb-0"
              onClick={() => scrollToSection("WhyToUse")}
            >
              Why to use?
            </button>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand-md my-BgColorblue px-5 shadow-sm fixed-top pb-0 pt-5 ">
      <div className="container-fluid d-flex flex-column">
        <h1 className=" fw-bold text-white mb-0 brand-text lh-1">RAFEEQ</h1>

        <ul className="navbar-nav d-flex flex-row gap-3">
          <li className="nav-item">
            <button
              className="btn btn-link nav-link text-light fw-light font-32 py-0 lh-1"
              onClick={() => scrollToSection("AboutUs")}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link nav-link text-light fw-light font-32 py-0 mx-5 lh-1"
              onClick={() => scrollToSection("AboutUs")}
            >
              About us
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link nav-link text-light fw-light font-32 py-0 lh-1"
              onClick={() => scrollToSection("WhyToUse")}
            >
              Why to use?
            </button>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row align-items-end h-fit">
        <img
          src="./Rafeeq/bell.png"
          alt="notification icon"
          className=" crusor-pointer icon-notification"
        />
        <img
          src="./Rafeeq/userpic.png"
          alt="profile icon"
          className="crusor-pointer icon-profile"
          onClick={() => navigate("/profile")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
