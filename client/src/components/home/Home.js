import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.intro}>
                    <h1 className={styles.homeHeading}>
                        Welcome to sustainsounds!
                    </h1>
                    <h3 className={styles.homeSlogan}>
                        We pride ourselves in creating a fair and modern service
                        for musicians and performers worldwide.
                    </h3>
                    <p className={styles.homeText}>
                        Since 2022 we have been giving creators and fans a
                        platform to explore, create, and attend different
                        musical events.
                        {'\n'}
                        You too can be a part of our family. All it takes is a
                        quick sign up. Happy exploring!
                    </p>
                </div>

                <div className={styles.links}>
                    <Link className={styles.link} to={'/events'}>
                        events
                    </Link>
                    <Link className={styles.link} to={'/artists'}>
                        artists
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Home;
