const axios = require("axios");
const { API_KEY } = process.env;

module.exports = async function getApiInfo() {
  const apiInfo = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const list = await apiInfo.data.map((el) => {
    return {
      name: el.name,
      lifeSpan: el.life_span,
      id: el.id,
      height: el.height.metric,
      weight: el.weight.metric,
      temperament: [el.temperament] //lo convierto en array, lo joineo(lo junto), con split le agrego la coma y el map es para
      //mapear los elementos del arreglo para devolverlo con el metodo .trim que elimina espacios del comienzo y del final  
        .join()
        .split(",")
        .map((el) => el.trim()),
      img: el.image.url,
    };
  });
  return list;
};
