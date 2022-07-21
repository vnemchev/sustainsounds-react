import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h1>SUSTAINSOUNDS</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/events">Events</Link>
                <Link to="/artists">Artists</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
                <p>Welcome, User!</p>
            </nav>
        </>
    );
};

export default Header;
