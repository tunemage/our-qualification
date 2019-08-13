const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//とりあえずCloud Functionsを登録してみる
//exports.addMessage = functions.https.onRequest(async (req, res) => {
//  const original = req.query.text;
//const snapshot = await admin.database().ref('/messages').push({ original: original });
//res.redirect(303, snapshot.ref.toString());
//res.redirect(303, "ukeuke")
//});

exports.getQualification = functions.https.onCall((data, context) => {
    return {
        qualificationName: "基本情報技術者",
        date: "2019-10-01"
    }
});

exports.addQualification = functions.https.onCall((data, context) => {
    // admin.firestore().settings({
    //     timestampsInSnapshots: true
    // })

    admin.firestore().collection("qualifications").add({
        qualificationName: "基本情報技術者2",
        date: "2019-11-01"
    })
    //なんか↓これがdeploy時にlinterにひっかかるので要調査
    // .then(function (docRef) {

    // })
    // .catch(function (error) {

    //     })
    //とりあえずダミーを返す
    return {
        qualificationName: "基本情報技術者2",
        date: "2019-11-01"
    }
});