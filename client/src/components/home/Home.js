import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Welcome to sustainsounds!</h1>
                <p>
                    We pride ourselves in creating a fair and modern service for
                    musicians and performers worldwide.
                </p>
            </div>
        </>
    );
};
export default Home;
