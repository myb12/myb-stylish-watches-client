import { useEffect, useState } from "react";
import fakeData from '../data/articles.json'

const useArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(fakeData);
    }, [])

    return [articles, setArticles];
}

export default useArticles;