// -------------------------------------------------------------------------- //
// File Name: register.tsx
// Created By: Quin Adam
// Description: Register an account
// -------------------------------------------------------------------------- //

// **** Imports ****
import type { NextPage } from 'next'
import {useRouter} from 'next/router';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer"
import {app, auth, db} from "../firebase/firebase";
import {addDoc, collection, doc, getDoc, setDoc} from "firebase/firestore";
import Script from "next/script";
import Link from "next/link";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect, User
} from "@firebase/auth";
import Layout from "../components/Layout";


// **** Main Page ****
const Register: NextPage = () => {

    // Next.js router
    const router = useRouter();

    // guard clause for authed users
    if (auth.currentUser) router.push('/')

    // firebase auth
    const provider = new GoogleAuthProvider();

    // **** Click Handlers ****
    // sign in with google
    function registerWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                register(user)
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    // sign in with email
    function registerEmail(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                register(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    // authenticate
    function register(user: User){
        setDoc(doc(db, "users", user.uid), {name: user.displayName}, {merge: true})
            .then(() => {router.push("/dashboard")});
    }

    // **** HTML ****
    return (
        <>
            <Layout>
                <div className="flex flex-col max-w-screen-sm border-orange-600 border p-16 m-5 items-center">
                    {/*Title*/}
                    <h2 className="text-xl font-bold mb-10">Register</h2>
                    {/*Form*/}
                    <form action="" method="post"
                    className="flex flex-col">
                        {/*Name*/}
                        <label htmlFor="full_name" className="mb-2">Full Name</label>
                        <input type="text" id="full_name" name="full_name" placeholder="xxx" size={50}
                            className="border border-orange-600 p-2 mb-5 rounded-md w-full"/>
                        {/*Email*/}
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="xxx" size={50}
                            className="border border-orange-600 p-2 mb-5 rounded-md w-full"/>
                        {/*Password*/}
                        <label htmlFor="pass" className="mb-2">Password</label>
                        <input type="password" id="pass" name="pass" placeholder="6+ Characters" size={50}
                               className="border border-orange-600 p-2 mb-8 rounded-md w-full"/>
                        {/*Submit*/}
                        {/*TODO: implement registerEmail function, change to it*/}
                        <button type="button" onClick={registerWithGoogle} className="text-white bg-orange-600 rounded-md py-1">Register</button>
                    </form>
                    {/*TODO: third party login*/}
                    {/*3rd party login*/}
                    <p className="mt-6">Or</p>
                    <button onClick={registerWithGoogle} className="flex gap-2 flex-row border border-orange-600 rounded-md py-1 px-3 mt-6">
                        <p>Register with Google</p>
                        {/*TODO: make real google pic*/}
                        <Image className="" src="/placeholder.png" alt="" width="25" height="25"></Image>
                    </button>
                </div>
            </Layout>
        </>
    )
}

export default Register