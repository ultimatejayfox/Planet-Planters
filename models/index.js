const User = require('./user');
const Plant = require('./plant');
const Comment = require('./comment')

User.hasMany(Plant, {
    foreignKey: 'user_id',
});

Plant.belongsToMany(User, {
    through: 'user_id',
    // foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    through: 'user_id',
    // foreignKey: 'user_id',
});

Plant.hasMany(Comment, {
    foreignKey: 'plant_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Plant, {
    through: 'plant_id',
    // foreignKey: 'plant_id',
});

module.exports = { User, Plant, Comment };