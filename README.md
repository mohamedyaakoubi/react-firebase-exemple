React Firebase Example
This project is a simple example of using Firebase with a React application. It was bootstrapped with [Create React App](https://react.dev/).

Getting Started
Prerequisites
Make sure you have Node.js installed on your machine.

Installation
1.Clone the repository:
```sh
git clone https://github.com/Adam-BH/react-firebase-exemple.git
```
```sh
cd react-firebase-exemple
```
2.Install the dependencies:
```sh
npm install
```
3.Install Firebase:
```sh
npm install firebase
```
4.Running the Application
To start the development server, run:
```sh
npm start
```
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

Firebase Configuration
Create a firebaseConfig.js file in the src directory and add your Firebase configuration. You can obtain the configuration from the Firebase console.
```sh
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
```
Learn More
You can learn more about Create React App in the [Create React App documentation](https://github.com/facebook/create-react-app).

To learn React, check out the [React documentation](https://legacy.reactjs.org/docs/getting-started.html).

For Firebase, visit the [Firebase documentation](https://firebase.google.com/docs).


