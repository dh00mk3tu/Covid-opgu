import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// request handler for cards 
export const fetchData = async() => {
    let mutableUrl= url;
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};

        // console.log(response);
    }
    catch (error) {

    }
}

// request handler for chart
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

// request handles for country picker
export const fetchCountries = async() => {
    try {
       const {data : {countries}} = await axios.get(`${url}/countries`);
       return countries.map((country)=> country.name);
    }
    catch (error){
        console.log(error);
    }
}