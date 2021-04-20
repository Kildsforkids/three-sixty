const sequelize = require('../db')
const {DataTypes, INTEGER, STRING} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Camera = sequelize.define('camera', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ip: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ClassRoom = sequelize.define('classroom', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    capacity: {type: INTEGER}
})

const Log = sequelize.define('log', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING}
})

const Action = sequelize.define('action', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, unique: true, allowNull: false}
})

User.hasMany(Log)
Log.belongsTo(User)

ClassRoom.hasMany(Camera)
Camera.belongsTo(ClassRoom)

Action.hasMany(Log)
Log.belongsTo(Action)

module.exports = {
    User,
    Camera,
    ClassRoom,
    Log,
    Action
}