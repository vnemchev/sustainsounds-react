import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/authContext';
import { getUsername } from '../../../utils/util';

import styles from '../Nav/Nav.module.css';

const Nav = () => {
    const { user } = useContext(AuthContext);
    const isArtist = Boolean(user.alias);

    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.hometext}>
                <h1>SUSTAINSOUNDS</h1>
            </Link>
            <Link to="/about" className={styles.navlink}>
                About
            </Link>

            <Link to="/events" className={styles.navlink}>
                Events
            </Link>

            <Link to="/artists" className={styles.navlink}>
                Artists
            </Link>

            {user.email ? (
                <>
                    <Link to="/profile" className={styles.navlink}>
                        Profile
                    </Link>

                    <Link to="/logout" className={styles.navlink}>
                        Logout
                    </Link>

                    {isArtist && (
                        <Link to="/create" className={styles.navlink}>
                            Create
                        </Link>
                    )}

                    <span>
                        Welcome, {user.alias || getUsername(user.email)}!
                    </span>
                </>
            ) : (
                <>
                    <Link to="/login" className={styles.navlink}>
                        Login
                    </Link>

                    <Link to="/register" className={styles.navlink}>
                        Sign Up
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Nav;
