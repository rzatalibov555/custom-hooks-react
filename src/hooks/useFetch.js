import { useEffect, useState } from "react";

const useFetch = (initialUrl) => {

    // console.log(initialUrl)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!initialUrl) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(initialUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                
                const json = await response.json();
                setData(json);
                setLoading(false);
                
            } catch (error) {
                // setLoading(false);
                setError(error.message);
            }
            finally{
                setLoading(false);
                // setError(null);
            }
        }

        fetchData();
    }, []);

    return { data, loading, error }; // Return an object without setUrl
}

export default useFetch;