const {Sequelize, DataTypes, Mpdeç} = require('sequelize')
const path = require('path') 

const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage:path.resolve(__dirname,'..','..','db.sqlite')
})

const Fornecedor = sequelize.define('fornecedor', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING(120),
        allowNull:false,
    }
})

Fornecedor.sync()
module.exports = Fornecedor