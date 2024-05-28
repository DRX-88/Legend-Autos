import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: '0 1rem',
  };

  return (
    <header>
      <div id='header'>
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1 className="m-0">
            Legend Autos
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          The best place to find your next car!
        </p>
        <div id='nav'>
          {Auth.loggedIn() ? (
            <>
            <li>
              <Link to="/cars" style={{ textDecoration: 'none', marginRight: '10px'}}>
                Vehicles
              </Link>
              <Link className="btn btn-lg btn-primary m-2" style={{ textDecoration: 'none' }} to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              </li>
            </>
          ) : (
            <>
            <Link to="/cars" style={{ textDecoration: 'none', marginRight: '10px' }}>
                Vehicles
              </Link>
              <Link className="btn btn-lg btn-primary m-2" style={{ textDecoration: 'none', marginRight: '10px' }} to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup" style={{ textDecoration: 'none', marginRight: '10px' }}>
                Signup
              </Link>
              
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
