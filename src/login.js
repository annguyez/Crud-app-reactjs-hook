import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

function Login(props) {
    
    const {user,signOut,signInWithGoogle,signInWithGithub,signInWithTwitter,signInWithFacebook
    
    
    } = props
    
    return (
    <div>
        {
            user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>
        }

        {
            user ? <button className="btn btn-danger" onClick={signOut}>Sign out</button> : 
            <>
            <button className="btn  btn-success" onClick={signInWithGoogle}>Sign in with Google</button><br/>
            <button className="btn  btn-dark" onClick={signInWithGithub}>Sign in with Github</button><br/>
            <button className="btn  btn-info" onClick={signInWithTwitter}>Sign in with Twitter</button><br/>
            <button className="btn  btn-primary" onClick={signInWithFacebook}>Sign in with Facebook</button>
            </>
        }
    </div>
    );
  }

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  twitterProvinder: new firebase.auth.TwitterAuthProvider(),
  githubProvinder: new firebase.auth.GithubAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);