const functions = require('firebase-functions');
const admin = require('firebase-admin');

const users = require('./handlers/users');

admin.initializeApp(functions.config().firebase);

// ADMIN
exports.onDeleteUser = functions.database.ref('users/{userId}').onDelete(users.onDeleteHandler(admin));
