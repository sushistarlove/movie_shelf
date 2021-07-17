const Movie = require('./Movie');
const Shelf = require('./Shelf');
const User = require('./User');
// const Genre = require('./Genre')

User.hasOne(Shelf, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

User.hasMany(Movie, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});


Shelf.belongsTo(User, {
    foreignKey: 'user_id'
});

Shelf.hasMany(Movie, {
    foreignKey: 'shelf_id',
    onDelete: 'Cascade'
});

Movie.belongsTo(Shelf, {
    foreignKey: 'shelf_id'
})

Movie.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {
    User,
    Movie,
    Shelf
};