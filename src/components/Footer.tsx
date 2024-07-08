"use client"

import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-[#5B3702] py-14 px-36 text-white">
            <div className="flex justify-between border-b  pb-16 mb-2 border-[#FF9C0A]">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Duexe</h2>
                    <p className="mb-4">Be the first to know about our app</p>
                    <div className="relative">
                        <input className="rounded-md py-4 pl-6 pr-10 bg-transparent border-2 border-white w-full" type="text" placeholder="Enter your Email" />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Image src="/icon-send.svg" alt="arrow" width={24} height={24} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6">Support</h2>
                    <p className="mb-4">hello@duexe.com</p>
                    <p>+234-708-000-3444</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6">Account</h2>
                    <p className="mb-4"><Link href="/cart">Cart</Link></p>
                    <Link href="/shop">Shop</Link>
                </div>
            </div>
            <p className="text-center text-[#82673f]">&copy; Duexe {currentYear}. All right reserved</p>
        </div>
    )
}

export default Footer