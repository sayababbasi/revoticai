// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAVm0XHH5hexApphEAQvI29OBAkhx1Glwk",
// //   authDomain: "revoticai.firebaseapp.com",
// //   projectId: "revoticai",
// //   storageBucket: "revoticai.firebasestorage.app",
// //   messagingSenderId: "375767287511",
// //   appId: "1:375767287511:web:9e7a19ad17f37cb4759292",
// //   measurementId: "G-FNL76JMYYP"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // // src/firebase.js
// // import { initializeApp } from 'firebase/app';
// // import { getAuth } from 'firebase/auth';

// // const firebaseConfig = {
// //   apiKey: "AIzaSyAVm0XHH5hexApphEAQvI29OBAkhx1Glwk",
// //   authDomain: "revoticai.firebaseapp.com",
// //   projectId: "revoticai",
// //   storageBucket: "revoticai.appspot.com",
// //   messagingSenderId: "375767287511",
// //   appId: "1:375767287511:web:9e7a19ad17f37cb4759292",
// //   measurementId: "G-FNL76JMYYP"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // // Firebase services
// // const auth = getAuth(app);

// // export { app, auth };


// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAVm0XHH5hexApphEAQvI29OBAkhx1Glwk',
//   authDomain: 'revoticai.firebaseapp.com',
//   projectId: 'revoticai',
//   storageBucket: 'revoticai.appspot.com',
//   messagingSenderId: '375767287511',
//   appId: '1:375767287511:web:9e7a19ad17f37cb4759292',
//   measurementId: 'G-FNL76JMYYP'
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db, collection, addDoc };

// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVm0XHH5hexApphEAQvI29OBAkhx1Glwk",
  authDomain: "revoticai.firebaseapp.com",
  projectId: "revoticai",
  storageBucket: "revoticai.firebasestorage.app",
  messagingSenderId: "375767287511",
  appId: "1:375767287511:web:9e7a19ad17f37cb4759292",
  measurementId: "G-FNL76JMYYP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
