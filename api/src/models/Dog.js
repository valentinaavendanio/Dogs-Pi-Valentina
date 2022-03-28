const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
      life_span: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.TEXT,
        validate: {
          isUrl: true,
        },
        defaultValue:
          "https://image.freepik.com/free-photo/cute-little-dog-impersonating-business-person_23-2148985938.jpg",
      },
      createInDb: {
        //sirve principalmente para que traiga el personaje que creamos y fue almacenado en la db.
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

