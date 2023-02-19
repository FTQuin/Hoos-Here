import Image from "next/image";
import {NextPage} from "next";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

// @ts-ignore
export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Hoos Here</title>
            </Head>

            <div className="flex flex-col border-orange-600 border-l border-r min-h-screen">
                <Header/>
                <main className="flex justify-center text-stone-800">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

