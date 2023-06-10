import axios from 'axios'
import { useState, useEffect } from 'react'

function useAxios(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setError(null);
                setLoading(false);
                console.log(data);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url])
    return { data, loading, error }

}
export default useAxios;