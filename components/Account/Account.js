import React,{ useEffect,useRef } from 'react'
import { useSession, signOut } from "next-auth/client";
import Image from 'next/image'

function Account({ accountOpen,setAccountOpen }) {
    const [session] = useSession();
    let accountMenu = useRef();
    useEffect(() => {
         let handler = (event) => {
            if(!accountMenu.current.contains(event.target)) {
                setAccountOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.addEventListener("mousedown", handler)
        }
    }, [setAccountOpen])

    return (
        <div
        ref={accountMenu}
            style={{ display: accountOpen ? "block" : "none" }}
            className="absolute text-black right-1 top-16 p-3 shadow-md border rounded-lg bg-white flex justify-center items-center flex-col min-w-[300px]"
        >
            <div className="flex justify-center items-center flex-col text-center">
                {!session ? (
                    <Image
                        src="/"
                        alt=""
                        height={80}
                        width={80}
                        className="rounded-full h-20 w-20 mb-6"
                    />
                ) : (
                    <Image
                        src={session.user.image}
                        alt="User image"
                        height={80}
                        width={80}
                        className="rounded-full h-20 w-20 mb-6"
                    />
                )}
                {!session ? <p>name</p> : <p>{session.user.name}</p>}
                {!session ? <p>email</p> : <p className="text-gray-600">{session.user.email}</p>}
            </div>
            <div className="mt-5 mb-5 border-t-2 border-b-2 p-2 w-full text-center">
                <button
                    className="px-4 py-1 border rounded-md hover:bg-gray-50"
                    onClick={signOut}
                >
                    Sign out account
                </button>
            </div>
            <div className="flex space-x-3 justify-center text-xs text-gray-600">
                <p>Privacy Policy</p>
                <p>Terms of service</p>
            </div>
        </div>
    );
}

export default Account;
