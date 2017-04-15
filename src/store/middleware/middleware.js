import Action from '../actions/action';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'

export default class Middleware {
    static signUp(obj) {
        console.log(obj);
        return (dispatch) => {
            const auth = firebase.auth();
            const promise = auth.createUserWithEmailAndPassword(obj.email, obj.pass);
            promise.then((user) => {
                console.log({user} + "your account is created");
                browserHistory.replace('/');
            })
            promise.catch(e => obj.error.innerHTML = e.message);
            // firebase.auth().onAuthStateChanged(firebaseUser => {
            //     if (firebaseUser) {
            //         console.log(firebaseUser);
            //     }
            //     else {
            //         console.log('not logged in');
            //     }
            // });
            dispatch(Action.signUpData(obj))
        }
    }

    static signIn(obj){
        console.log(obj);
        return (dispatch) => {
            const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(obj.userEmail, obj.userPass);
        promise.then((user) => {
            console.log("signIn successfully");
            browserHistory.push('/Home');
        })
        promise.catch(e => console.log("ERROR:", e.message));
        dispatch(Action.signIn(obj))
        }
    }

    static signOut(){
        return (dispatch) => {
        firebase.auth().signOut().then(function () {
            browserHistory.replace('/');
        })
        dispatch(Action.signOut())
    }
    }
}