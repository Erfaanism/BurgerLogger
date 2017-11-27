const connection = require('./connection');

const selectAll = callback => {
    connection.query('SELECT * FROM burgers', (error, result) => {
        if (error) throw error;
        callback(result);
    });
};

const insertOne = (burgerName, callback) => {
    connection.query('INSERT INTO burgers SET ?', { burger_name: burgerName }, (error, result) => {
        if (error) throw error;
        callback(result);
    });
};

const updateOne = (burgerId, action, callback) => {
    if (action === 'devoure') {
        let CURRENT_TIMESTAMP = { toSqlString: () => { return 'CURRENT_TIMESTAMP()'; } };
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true, devoured_at: CURRENT_TIMESTAMP }, { id: burgerId }], (error, result) => {
            if (error) throw error;
            callback(result);
        });
    } else if (action === 'undevoure') {
        let CURRENT_TIMESTAMP = { toSqlString: () => { return 'CURRENT_TIMESTAMP()'; } };
        let clearTimestamp = { toSqlString: () => { return 'NULL' } };
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: false, devoured_at: clearTimestamp }, { id: burgerId }], (error, result) => {
            if (error) throw error;
            callback(result);
        });
    };
};

module.exports = {
    selectAll,
    insertOne,
    updateOne
};