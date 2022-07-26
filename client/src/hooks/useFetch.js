import { useEffect, useState } from 'react';

const host = 'http://localhost:3030';

const useFetch = (endpoint, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(host + endpoint, options)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setIsLoading(false);
            })
            .catch(err => setError(err));
    }, [endpoint, options]);

    return {
        data,
        error,
        isLoading,
    };
};

export default useFetch;
