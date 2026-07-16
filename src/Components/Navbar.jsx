function Navbar() {
    return ( 
        <div>
             <nav
        className="navbar navbar-expand-lg fixed-top"
        aria-label="Ninth navbar example"
      >
        <div className="container">
         
<a className="navbar-brand fw-bold fst-italic nav-icon" href="#">
  <span className="fs-1 d-block mb-0">Srinivasa</span>
  <small className="fs-6 text-muted d-block mt-0 nav-icon">Courier Services</small>
</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07XL"
            aria-controls="navbarsExample07XL"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active me-4" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link active me-4" href="about">About</a></li>
              <li className="nav-item">
                <a className="nav-link active me-4" href="pricing">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-4" href="services" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="services">Domestic Services</a></li>
                  <li><a class="dropdown-item" href="international">International Services</a></li>
                  
                </ul>

              </li>
              <li className="nav-item"><a className="nav-link active me-4" href="contact">Contact</a></li>

             
            </ul>
            <a href="https://wa.me/919652735720" target='_blank'><button className="button btn btn-warning btn-lg fs-5">Book Now</button></a>
          </div>
        </div>
      </nav>
        </div>
     );
}

export default Navbar;