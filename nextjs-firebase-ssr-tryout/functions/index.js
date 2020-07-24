const functions = require('firebase-functions');

// const next = require('next');
// const config = require('./next.config');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev, conf: config});
// const handle = app.getRequestHandler();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.test = functions.https.onRequest( (request, response) => {
  console.log("File: " + request.originalUrl);
  // await app.prepare();
  // handle(request, response);
  // return app.prepare().then(() => handle(request, response));
  response.send("helloworld")
});
