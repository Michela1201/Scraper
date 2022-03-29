const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { snapshotConstructor } = require("firebase-functions/v1/firestore");
const cors = require('cors')({origin: true});

admin.initializeApp();


// // Create and Deploy Your First Cloud Functions ($sudo firebase deploy)
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
   const number = 4;
   response.send(number.toString());
   
});

// Accept comment and return the same comment to the user
exports.saveItem = functions.https.onRequest((request, response) => {
    cors(request,response, () => {
        console.log("Request body", request.body);
        
        const currentTime = admin.firestore.Timestamp.now();
        request.body.timestamp = currentTime;

        admin.firestore().collection('items').add(request.body).then(() => {
            response.send("Saved in the database");
        });
    });
});









exports.getItems = functions.https.onRequest((request, response) => {
    cors(request,response, () => {
        // 1. Connect to our Firestore database
        let myData = []
        admin.firestore().collection('items').get().then((snapshot) => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                response.send('No data in database');
                return;
            }
            snapshot.forEach(doc => {
                myData.push(Object.assign(doc.data(), {id:doc.id}));
            });
            // 2. Send data back to client
            response.send(myData);
        });
    });
});