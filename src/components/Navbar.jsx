export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">Foodieland</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Recipes</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
