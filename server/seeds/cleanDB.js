const models = require('../models');
const db = require('../config/connection');

const cleanDB = async () => {
    await db.dropDatabase();
};
    
module.exports = cleanDB;



