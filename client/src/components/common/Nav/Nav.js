import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/authContext';
import { getUsername } from '../../../utils/util';

import styles from './Nav.module.css';

const Nav = () => {
    const { user } = useContext(AuthContext);
    const isArtist = Boolean(user.alias);

    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.hometext}>
                <h1>SUSTAINSOUNDS</h1>
            </Link>

            <Link to="/events" className={styles.navlink}>
                Events
            </Link>

            <Link to="/artists" className={styles.navlink}>
                Artists
            </Link>

            <Link to="/about" className={styles.navlink}>
                About
            </Link>

            {user.email ? (
                <>
                    {isArtist && (
                        <Link to="/create" className={styles.navlink}>
                            Create
                        </Link>
                    )}

                    <Link to="/profile" className={styles.navlink}>
                        Welcome, {user.alias || getUsername(user.email)}!
                    </Link>

                    <Link to="/logout" className={styles.navlink}>
                        Log out
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/login" className={styles.navlink}>
                        Log in
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
