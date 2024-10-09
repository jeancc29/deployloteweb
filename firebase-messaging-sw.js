importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
//   apiKey: 'AIzaSyBx-v-9Yj1wCxKTCzmO3HLypqFTPIvWbP4',
//   appId: '1:553232454336:web:f0fe67fdc96857baaa5325',
//   messagingSenderId: '553232454336',
//   projectId: 'loterias-c5cca',
//   authDomain: 'loterias-c5cca.firebaseapp.com',
// //   databaseURL:'xxx',
// //   storageBucket: 'xxx',
//   measurementId: 'G-YJJQB6C3Q5',
apiKey: "AIzaSyBx-v-9Yj1wCxKTCzmO3HLypqFTPIvWbP4",
  authDomain: "loterias-c5cca.firebaseapp.com",
  projectId: "loterias-c5cca",
  storageBucket: "loterias-c5cca.appspot.com",
  messagingSenderId: "553232454336",
  appId: "1:553232454336:web:f0fe67fdc96857baaa5325",
  measurementId: "G-YJJQB6C3Q5"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});