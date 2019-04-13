const orm = require('./../config/orm');

var brew = {
  selectAll: cb => {
    orm.selectAll("brews", res => cb(res));
  },
  insertOne: (val, cb) => {
    orm.insertOne("brews", "brew_name", val, res => cb(res));
  },
  updateOne: (val, condition, cb) => {
    orm.updateOne("brews", "tasted", val, condition, res => cb(res));
  }
};

// Export the database functions for the controller (brewController.js).
module.exports = brew;