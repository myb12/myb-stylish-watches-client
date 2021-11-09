import { useEffect, useState } from "react";
import fakeData from '../data/services.json'

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(fakeData);
    }, [])

    return [services, setServices];
}

export default useServices;