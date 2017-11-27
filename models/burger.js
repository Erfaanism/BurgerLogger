const orm = require('../config/orm');

let burger = {

    all: callback => {
        orm.selectAll(result => {
            callback(result);
        });
    },

    create: (burgerName, callback) => {
        orm.insertOne(burgerName, result => {
            callback(result);
        });
    },

    update: (burgerId, action, callback) => {
        orm.updateOne(burgerId, action, result => {
            callback(result);
        });
    }
};

module.exports = burger;