import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyBi4ZT5rcktmD7nP0GZxXcpT7tIBzRPw-Q",

  authDomain: "chuckwudi-feb12.firebaseapp.com",

  projectId: "chuckwudi-feb12",

  storageBucket: "chuckwudi-feb12.appspot.com",

  messagingSenderId: "878922655129",

  appId: "1:878922655129:web:71ebe2b3c2ee2c8ff5df08",

  measurementId: "G-1J326P0F30"

};

function initApp() {
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  return {app};
}

export const app = initApp();