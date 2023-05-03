// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQQyYTOo_grgppRM2tyy60GRUPMVeDNe4",
  authDomain: "imovel-aval-b837d.firebaseapp.com",
  projectId: "imovel-aval-b837d",
  storageBucket: "imovel-aval-b837d.appspot.com",
  messagingSenderId: "39128697436",
  appId: "1:39128697436:web:b13105e1e0d9e6d0c3f499",
  storageBucket: "gs://imovel-aval-b837d.appspot.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);