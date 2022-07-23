import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <h1>SUSTAINSOUNDS</h1>
            </Link>

            <Link to="/about">About </Link>

            <Link to="/events">Events </Link>

            <Link to="/create">Create </Link>

            <Link to="/artists">Artists </Link>

            <Link to="/profile">Profile </Link>

            <Link to="/login">Login </Link>

            <Link to="/register">Sign Up</Link>

            <span>Welcome, User!</span>
        </nav>
    );
};

export default Nav;
