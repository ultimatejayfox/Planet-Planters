const User = require('./user');
const Plant = require('./plant');
const Comment_Id = require('./comment_id')

Plant.belongsToMany(User, {
    through: {
        model: Comment_Id,
    },
    as: 'comment_id'
});

User.hasMany(Plant, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Plant, Comment_Id };