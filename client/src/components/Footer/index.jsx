import { useLocation, useNavigate } from 'react-router-dom';
import './footer.css'

const Footer = () => {

  return (
    <footer>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Legend Autos</h4>
      </div>
    </footer>
  );
};
export default Footer;
  