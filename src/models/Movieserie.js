const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('movieserie', {
    image: {
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
    title:{
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z0-9\s_\-\.\'\!\&\@\/\:\$]+$/,
        len: {
          args: [2, 255],
          msg: "Name must be at least 2 characters"
        }
      }
    },
    creationAge:{
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
    rated:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: true,
        max: 5,                  // only allow values <= 23
        min: 0,  
      }
    },
  },{
    timestamps: false,
  });
};
