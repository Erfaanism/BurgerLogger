const connection = require('./connection');

const selectAll = () => {
    connection.query('SELECT * FROM burgers', (error, result) => {
        console.log(result);
        connection.end();
    });
};

const insertOne = burgerName => {
    connection.query('INSERT INTO burgers SET ?', { burger_name: burgerName });
    console.log(`Burger (${burgerName}) has been added!`);
    connection.end();
};

const updateOne = burgerId => {
    let CURRENT_TIMESTAMP = { toSqlString: () => { return 'CURRENT_TIMESTAMP()'; } };
    connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true, devoured_at: CURRENT_TIMESTAMP }, { id: burgerId }], (error, result) => {
        if (error) throw error;
        console.log(`Burger id(${burgerId} has been devoured!)`);
        connection.end();
    });
};

module.exports = {
    selectAll,
    insertOne,
    updateOne
};