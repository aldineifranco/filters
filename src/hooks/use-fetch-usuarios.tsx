import { useEffect, useState } from 'react';

const API_URL = "http://localhost:5077/api/usuarios";

export function useFetchUsurios() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if(!response.OK) {
                    throw new Error("Errro ao buscar os dados")
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    }, []);
    
    
    return { data, loading, error }
}