const { dog, temperament } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

//obtengo las razas de la api
const FromApiInfo = async () => {
    const apiURL = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const apiInfo = await apiURL.data.map(raza => {
        return {
            id: raza.id,
            name: raza.name,
            weight: raza.weight,
            image: raza.image.url,
            temperament: raza.temperament,
        };
    })
}