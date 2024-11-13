
import { LoginSection } from "./LoginSection";
import "../HeroSection.css"

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#433878' }}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="/" style={{ color: 'white' }} >
            FlashWiz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/decks">
                  My Decks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/deck/add">
                  Create Deck
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/decks/public/category">
                  Study
                </a>
              </li>
            </ul>

            <LoginSection />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
