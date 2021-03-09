import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// get requests 
export const fetchData = async() => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};

        // console.log(response);
    }
    catch (error) {

    }
}

export const fetchDailyData = async => {
    try {
        const {data} = axnios.get(`${url}/daily`);
        console.log(data);
    }
    catch (error) {
        // Catch masala lmao 
    }
}