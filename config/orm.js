const connection = require('./connection');

const orm = {
  selectAll: (table, cb) => {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, table, (err, result) => {
      console.log(queryString);
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (table, col, val, cb) => {
    const queryString = `INSERT INTO ?? (??) VALUES (?);`;
    connection.query(queryString, [table, col, val], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (table, col, val, condition, cb) => {
    const queryString = "UPDATE ?? SET ?? = ? WHERE " +condition+";";

    connection.query(queryString, [table, col, val], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
