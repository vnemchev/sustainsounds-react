import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <h1>Something went wrong!</h1>
            <Link to={'/'}>Return to home</Link>
        </>
    );
};

export default Error404;
