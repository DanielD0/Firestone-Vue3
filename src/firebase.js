import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCBye34SJKgerBdQmNecINk-AfK3fEop-I",
    authDomain: "vue3-firebase-8b024.firebaseapp.com",
    projectId: "vue3-firebase-8b024",
    storageBucket: "vue3-firebase-8b024.appspot.com",
    messagingSenderId: "16520431691",
    appId: "1:16520431691:web:2f6238970b150c678065ce"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp

firebase.getCurrenUser = () => {
    return new Promise((resolve,reject)=>{
        const unsuscribe = firebase.auth().onAuthStateChanged(user => {
            unsuscribe()
            resolve(user)
        },reject)
    });
}

export {db, auth, marcaTiempo, firebase}