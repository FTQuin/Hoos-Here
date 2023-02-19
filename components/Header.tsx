import Image from "next/image";
import {NextPage} from "next";
import {useRouter} from "next/router";
import {getAuth, onAuthStateChanged} from "@firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {useEffect} from "react";
import {auth} from '../firebase/firebase'

export function AuthButton(){

    // auth vars
    const [user, userLoading, userErr] = useAuthState(auth)

    // Next.js router
    const router = useRouter()

    if (user) {
        return(
            <div className="flex items-center my-2 mx-3">
                <button className="border border-orange-600 px-3 py-1 rounded-md"
                        onClick={() => {auth.signOut(); router.push('/')}}>
                    Sign Out
                </button>
            </div>
        )
    } else {
        // **** HTML ****
        return(
            <div className="flex items-center my-2 mx-3">
                <button className="border border-orange-600 px-3 py-1 rounded-md"
                        onClick={() => router.push('/sign-in')}>
                    Sign In
                </button>
            </div>
        )
    }
}

const Header: NextPage = () => {


    // Next.js router
    const router = useRouter()

    return (
        <header className="flex justify-between items-center border-orange-600 border-b">
            <button className="relative flex h-10 w-40 m-2">
                <Image src="/logo 3.png" fill={true} object-fit={"contain"} alt=""
                       onClick={() => router.push('/')} ></Image>
            </button>
            <AuthButton></AuthButton>
        </header>
    );
}

export default Header;