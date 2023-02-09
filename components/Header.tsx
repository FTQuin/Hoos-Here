import Image from "next/image";
import {NextPage} from "next";
import {useRouter} from "next/router";

const Header: NextPage = () => {

    // Next.js router
    const router = useRouter()

    return (
        <header className="flex justify-between items-center border-orange-600 border-b">
            <div className="relative flex h-10 w-40 m-2">
                <Image src="/logo 3.png" layout="fill" objectFit="contain" alt=""
                       onClick={() => router.push('/')} ></Image>
            </div>
            <div className="flex items-center my-2 mx-3">
                <button className="border border-orange-600 px-3 py-1 rounded-md"
                    onClick={() => router.push('/sign-in')}>
                    sign in
                </button>
            </div>
        </header>
    );
}

export default Header;