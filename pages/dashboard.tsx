// -------------------------------------------------------------------------- //
// File Name: dashboard.tsx
// Created By: Quin Adam
// Description: A dashboard showing all courses that a prof has created.
// -------------------------------------------------------------------------- //

// **** Imports ****
import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {getDocs, onSnapshot, query, where} from "@firebase/firestore";
import {collection, doc, getDoc} from "firebase/firestore";
import {db, app} from "../firebase/firebase";
import {getAuth, onAuthStateChanged} from "@firebase/auth";
import {Key, ReactElement, useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";


// **** **** Components **** ****
// **** CourseCard Component ****
function CourseCard({course_name}: { course_name: string }) {
    // Next.js router
    const router = useRouter()

    // **** HTML ****
    return (
        <>
            <div
                className="flex items-center flex-col text-orange-50 bg-orange-600 rounded-lg p-3 min-w-[300px] max-w-[400px]">
                {/*Title*/}
                <h2 className="text-xl">{course_name}</h2>
                <div className="flex">
                    {/*Take Attendance button*/}
                    <button className="border border-orange-50 rounded-md hover:bg-orange-400 px-3 m-1"
                            onClick={() => router.push('/take-attendance/')}>
                        Take Attendance
                    </button>
                    {/*Course Summary button*/}
                    <button className="border border-orange-50 rounded-md hover:bg-orange-400 px-3 m-1"
                            onClick={() => router.push('/course/')}>
                        Course Summary
                    </button>
                </div>
            </div>
        </>
    );
}

// **** Main Page ****
const Dashboard: NextPage = () => {

    // Next.js router
    const router = useRouter()

    // auth vars
    const auth = getAuth(app)
    const [user, userLoading, userErr] = useAuthState(auth)
    // name for CourseCards
    const [courseNames, setCourseNames]: [Array<string>, any] = useState([]);

    // get course names
    // need to use useEffect because query will only work if user is logged in
    useEffect( () => {
        // guard clauses
        if (userLoading) return;
        if (user == null || userErr){
            router.push('/')
            return
        }

        // get course data from Firebase
        const getCourseNames = async () => {
            let snap = await getDoc(doc(db, "users/" + user.uid))
            // @ts-ignore
            let courses = snap.data()['courses']
            if (!courses){
                setCourseNames([])
                return
            }

            // get users courses
            let tempCourseNames = []
            for (let courseRef of courses) {
                let cSnap = await getDoc(courseRef)
                // @ts-ignore
                tempCourseNames.push(cSnap.data()['name'])
            }
            // @ts-ignore
            setCourseNames(tempCourseNames)
        }
        getCourseNames()
    }, [userLoading])

    // **** HTML ****
    return (
        <>
            {/* Meta Data */}
            <Head>
                <title>Hoos Here</title>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>

            {/* Start of Wrapper */}
            <div className="flex flex-col bg-white min-h-screen border-orange-600 border-l border-r">
                {/* Header */}
                <Header/>

                {/* Start of Main Content */}
                <main className="flex justify-center ">
                    <div className="grid grid-cols-2 gap-5 p-5 max-w-screen-md">
                        {/*CourseCard loop*/}
                        {courseNames.map((name) => {
                                return <CourseCard key={name} course_name={name}/>
                            })
                        }
                    </div>
                </main>
                {/* End of Main Content */}

                {/* Footer */}
                {/*TODO: make footer go to bottom*/}
                <Footer />

            </div>
            {/* End of Wrapper */}
        </>
    )
}

export default Dashboard