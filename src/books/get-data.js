import {useState, useEffect} from 'react';
import axios from 'axios';


export const useGraph = (params) => {
    const api_url = process.env.REACT_APP_API_URL_DEV;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const graphapi = axios.create({
        baseUrl: api_url,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const getBooks = async (query) => graphapi.post(api_url, query).then(res =>{
        if (res.data.data){
            setData(res.data.data);
        }
    }).catch(e => {
        if (axios.isCancel(e)) {
            setError(false);
            setLoading(false);
            return;
        }
        console.log(`%c${e.message}`, 'color:orange');
        setError(true);
        setLoading(false);
    });

    useEffect(() => {
        setLoading(true);
        setError(false);
        getBooks(params);
    }, []);

    return {
        loading, error, data, setData
    };

}