const admin = require("firebase-admin");
// Initialize Firebase Admin SDK
// You need to download the service account key from Firebase Console
// and place it in the server directory, e.g., serviceAccountKey.json
const serviceAccount = require("./keys/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: 'https://your-project-id.firebaseio.com' // If using Realtime Database
});
module.exports = admin;