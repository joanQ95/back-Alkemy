const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true,
      }
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,  
      }
    },
    weight:{
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true,  
      }
    },
    story:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9\s_\-\.\'\!\&\@\/\:\$]+$/,
        len: {
          args: [2, 255],
          msg: "Name must be at least 2 characters"
        }
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
