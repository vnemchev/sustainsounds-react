import { useNavigate } from 'react-router-dom';
import styles from './404.module.css';

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.a}></div>
            <h1 className={styles.headingText}>Something went wrong!</h1>
            <div className={styles.a}></div>

            <button
                className="btn-secondary"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Go back
            </button>
        </div>
    );
};

export default Error404;
