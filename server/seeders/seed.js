const db = require('../config/connection');
const { Profile, User } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const cleanDb = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDb('Profile', 'profiles');

        await Profile.create(profileSeeds);

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
