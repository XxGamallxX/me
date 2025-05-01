


const Navbar = () => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <nav className="navbar navbar-expand-md my-BgColorblue px-4 shadow-sm fixed-top">
        <div className="container-fluid">
          {/* Logo Text */}
          <span className="navbar-brand fw-bold text-white">RAFEEQ</span>
  
          {/* Right Links */}
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('Home')}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('AboutUs')}>
                About us
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-white" onClick={() => scrollToSection('WhyToUse')}>
                Why to use
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;