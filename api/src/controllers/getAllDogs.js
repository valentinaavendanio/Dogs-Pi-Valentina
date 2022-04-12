const getApiInfo = require("./getApiInfo");
const getDbInfo = require("./getDbInfo");

module.exports = async function getAllDogs() {
  const infoApi = await getApiInfo();
  const infoDb = await getDbInfo();
  const allDogs = infoApi.concat(infoDb); //concateno para unir lo de la API con lo de la DB y lo almaceno en allDogs.

  return allDogs;
};
