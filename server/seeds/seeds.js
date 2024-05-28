const db = require('../config/connection');
const { Cars } = require('../models');
const carSeeds = require('./carSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB();
        await Cars.create(carSeeds);

        console.log('Cars seeded successfully!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});
