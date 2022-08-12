import { useNavigate } from 'react-router-dom';

import styles from './404.module.css';

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.space}></div>
            <h1 className={styles.headingText}>Something went wrong!</h1>
            <div className={styles.space}></div>

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
