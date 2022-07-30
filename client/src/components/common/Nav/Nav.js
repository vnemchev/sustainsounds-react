import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/authContext';
import { getUsername } from '../../../utils/util';

const Nav = () => {
    const { user } = useContext(AuthContext);
    const isArtist = Boolean(user.alias);

    return (
        <nav>
            <Link to="/">
                <h1>SUSTAINSOUNDS</h1>
            </Link>

            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/artists">Artists</Link>
            {user.email ? (
                <>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                    {isArtist && <Link to="/create">Create</Link>}
                    <span>
                        Welcome, {user.alias || getUsername(user.email)}!
                    </span>
                </>
            ) : (
                <>
                    <Link to="/login">Login </Link>
                    <Link to="/register">Sign Up</Link>
                </>
            )}
        </nav>
    );
};

export default Nav;
