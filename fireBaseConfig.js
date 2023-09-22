// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBKPWe-gvX4Bam8iOtFydPdv4_Jx9iLQ0g",
	authDomain: "primeiro-projeto-be6a1.firebaseapp.com",
	databaseURL: "https://primeiro-projeto-be6a1-default-rtdb.firebaseio.com",
	projectId: "primeiro-projeto-be6a1",
	storageBucket: "primeiro-projeto-be6a1.appspot.com",
	messagingSenderId: "741769041377",
	appId: "1:741769041377:web:3d8958a135c7c0afc92ea0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
