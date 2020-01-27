const artist: string = "alexandraciausu";
const uniqueID: string = "a6df7";
const fAppSuffix: string = "firebaseapp";
const fAppIoSuffix: string = "firebaseio";
const appSSuffix: string = "appspot";
require('dotend').config();

// import * as firebase from 'firebase';
// import * as functions from 'firebase-functions';
// import { GCloudHelper } from '../gstorage.helper';
const GCloudHelper = require('./gStorage.helper')
const firebase = require('firebase');
const functions  = require('firebase-functions')


firebase.initializeApp({
  apiKey: process.env.API,
  authDomain: "alexandraciausu-a6df7.firebaseapp.com",
  databaseURL: "https://alexandraciausu-a6df7.firebaseio.com",
  projectId: "alexandraciausu-a6df7",
  storageBucket: "alexandraciausu-a6df7.appspot.com",
  messagingSenderId: process.env.messageSenderId
});



exports.sendEmail = functions.https.onCall((data: any):string => {
  const gHelper = new GCloudHelper();
  const emailSent = gHelper.emailSender(data.userName, data.userEmail, data.userMobile, data.userMessage);
  return emailSent;
});

exports.deleteImage = functions.https.onCall((data: any):string => {
  const gHelper = new GCloudHelper();
  const imgDeleted = gHelper.httpGetJSONandDelete(data.imgCategory, data.content);
  return imgDeleted;
 
})

exports.publishImage = functions.https.onCall((data: any) => {
  // const gHelper = new GCloudHelper();
  // const imgUploaded = gHelper.httpGetJSONandUpdate(data.imgCategory, data.imgURL);
  // return imgUploaded;

  const yellow = data.imgURLs;
  console.log(yellow)
  return 'yess'
})
