const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find(filter) {
    return db('users')
        .where(filter);
}

function findBy(filter) {
    return db('users')
        .where(filter)
        .first();
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)

        });
}

function findById(id) {
    return db('users')
        .where({id})
        .first();
}