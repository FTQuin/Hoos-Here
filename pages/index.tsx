// -------------------------------------------------------------------------- //
// File Name: index.tsx
// Created By: Quin Adam
// Description: The home page of HoosHere.me
// -------------------------------------------------------------------------- //

// **** Imports ****
import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image"
import Footer from "../components/Footer";
import {auth} from "../firebase/firebase";
import {AuthButton} from "../components/Header";
import firebase from "firebase/compat";
import Auth = firebase.auth.Auth;


// **** Main Page ****
const Home: NextPage = () => {

  // Next.js router
  const router = useRouter()

  // **** HTML ****
  return (
      <>
        {/* Meta Data */}
        <Head>
          <title>Hoos Here</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>

        <MainPageHeader />
        <main className="p-3">
          <WelcomeSection />
          <Features />
          <Thoughts />
        </main>
        <Footer />
    </>
  )
}



function MainPageHeader(){
  const router = useRouter()

  const clickRegister = () => {
    router.push('/register')
  }

  const clickLogin = () => {

    router.push('/sign-in')
  }

  // **** HTML ****
  return(
      <>
        {/* Start of Header */}
        <header className="flex justify-between border-b border-orange-600">

          {/* Left side*/}
          <div className="flex justify-center items-center ">
            {/*Logo*/}
            <div className="relative flex h-10 w-40 my-2">
              <Image src="/logo 3.png" alt="" fill={true} object-fit="contain"></Image>
            </div>
            {/*about, pricing, faq*/}
            <nav className="flex">
              <Link href="/about">
                <p className="px-3">About Us</p>
              </Link>
              <Link href="/pricing">
                <p className="px-3">Pricing</p>
              </Link>
              <Link href="/faq">
                <p className="px-3">FAQ</p>
              </Link>
            </nav>
          </div>

          {/* Right side*/}
          <div className="flex justify-center items-center">
            {/*search*/}
            <Link href="/search">
              <p className="px-3">
                <i className="fa fa-search text-orange-600"></i>
              </p>
            </Link>
            {/*register and login*/}
            {!auth.currentUser && <>
              <div onClick={clickRegister}>
                <button className="px-3 mx-3 border-orange-600 border rounded-md">Register</button>
              </div>
              <div onClick={clickLogin}>
                <button className="px-3 mx-3 border-orange-600 border rounded-md">Login</button>
              </div>
            </>}
            {auth.currentUser && <>
              {AuthButton()}
            </>}
            {/*TODO: add language dropdown*/}
            <p className="px-3">
              <i className="fa fa-sign-in-alt "></i>
              En^
            </p>
          </div>
        </header>
        {/* End of Header */}
      </>
  )
}

function WelcomeSection(){
  return(
      <>
        {/* Welcome section */}
        <section className="flex justify-center p-11 border-b border-orange-600 pb-10">
          <div className="w-2/2 flex justify-center">
            <Image
                width="99"
                height="99"
                src="/founder.png"
                alt="Founder"
                className="p-1"
            />
          </div>
          <div className="w-2/2 pl-3 flex-col">
            <h2 className="text-2xl font-bold pt-3">Welcome to HoosHere.me</h2>
            <p className="pt-3">An easy to use platform where any instructor can easily take attendance.</p>
            <button className="bg-orange-601 text-white mt-7 px-10 py-1 rounded-lg">Learn More</button>
          </div>
        </section>
      </>
  )
}

function Features(){
  return(
      <>
        {/* Features */}
        <section className="flex-col p-10 border-b border-orange-600">
          <h2 className="text-2xl font-bold text-center">Features</h2>
          <div className="flex">
            <div className="w-1/4 text-center p-3">
              <i className="fa fa-clock-o text-orange-600"></i>
              <p className="text-xl font-bold">Real Time Tracking</p>
            </div>
            <div className="w-1/4 text-center p-3">
              <i className="fa fa-building text-orange-600"></i>
              <p className="text-xl font-bold">Students Self Register</p>
            </div>
            <div className="w-1/4 text-center p-3">
              <i className="fa fa-line-chart text-orange-600"></i>
              <p className="text-xl font-bold">Minimal Learning Curve</p>
            </div>
            <div className="w-1/4 text-center p-3">
              <i className="fa fa-pie-chart text-orange-600"></i>
              <p className="text-xl font-bold">HoosHere is FAST!!</p>
            </div>
          </div>
        </section>
      </>
  )
}

function Thoughts(){
  return(
      <>
        {/* Thoughts */}
        <section className="flex-col p-10">
          <h2 className="text-2xl font-bold text-center">Organize your thoughts into visual wireframes and start collaborating</h2>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center m-10 p-8 border border-orange-600">
              <Image src="/placeholder.png" height="100" width="100" alt=""></Image>
              <p>Hooshere enables teams to think out loud together - visually!</p>
              <button className="bg-orange-600 text-white mt-7 px-10 py-1 rounded-lg">Learn More</button>
            </div>
            <div className="flex flex-col justify-center items-center m-10 p-8 border border-orange-600">
              <Image src="/placeholder.png" height="100" width="100" alt=""></Image>
              <p>Hooshere enables teams to think out loud together - visually!</p>
              <button className="bg-orange-600 text-white mt-7 px-10 py-1 rounded-lg">Learn More</button>
            </div>
          </div>
        </section>
      </>
  )
}


export default Home