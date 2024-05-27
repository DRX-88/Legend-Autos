const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
    try {
        await db.dropDatabase();
        await models[modelName].deleteMany({});
    } catch (err) {
        console.error(err);
    }
}





