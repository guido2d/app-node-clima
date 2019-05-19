const axios = require("axios");

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=c33871c755ad0adfbc07f99186688bf7&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};