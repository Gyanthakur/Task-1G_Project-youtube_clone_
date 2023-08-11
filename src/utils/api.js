import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/youtube-search/',
    params: {
        q: 'desp',
        hl: 'en',
        gl:'US'
},
    headers: {
    //   'X-RapidAPI-Key': '271eed2f13mshc55b246a64b6df3p1a9387jsncaca365c12d7',
      'X-RapidAPI-Key': 'a99e6e1b76mshd412bb017208fdap1d9383jsn06098ee0f2f3',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
