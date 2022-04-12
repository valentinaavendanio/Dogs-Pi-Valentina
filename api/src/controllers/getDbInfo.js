const { Dog } = require("../db");
const { Temperament } = require("../db");

module.exports = async function getDbInfo() {
  return await Dog.findAll({ //traigo todos los perros incluyendo el atributo name de temperamento
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};
