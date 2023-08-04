const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

const cleanDb = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDb('User', 'users');

        await User.create(userSeeds)

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
