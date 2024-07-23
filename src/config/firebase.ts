// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCZPxgz5bnx34wRW65Od63JiYXVW2sXMj4',
	authDomain: 'react-exemple-b9139.firebaseapp.com',
	projectId: 'react-exemple-b9139',
	storageBucket: 'react-exemple-b9139.appspot.com',
	messagingSenderId: '38110019363',
	appId: '1:38110019363:web:cb1056c5a13dd932d35696',
	measurementId: 'G-K19B36E22T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
