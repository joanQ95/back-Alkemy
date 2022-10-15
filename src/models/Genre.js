const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true,
      }
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9\s_\-\.\'\!\&\@\/\:\$]+$/,
        len: {
          args: [2, 255],
          msg: "Name must be at least 2 characters"
        }
      }
    }
  },{
    timestamps: false,
  });
};
