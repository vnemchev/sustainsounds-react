import Nav from '../Nav/Nav';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <Nav />
        </header>
    );
};

export default Header;
