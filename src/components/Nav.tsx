"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    const textVariants = {
        hover: { scale: 1.1 },
    };

    return (
        <>
            <div className="bg-[#5B3702] flex justify-center items-center text-white text-xs md:text-sm p-4 border border-black">
                <p className="mr-10">Summer Sale For All Dinning Set.  Free Express Delivery - OFF 50%!</p>
                <motion.a href="/" className="font-bold hidden md:block underline cursor-pointer" whileHover={{ scale: 1.1 }}>ShopNow</motion.a>
                <div className="hidden md:flex absolute right-12 items-center cursor-pointer flex">
                    <p>English</p>
                    <Image
                        className=""
                        src="/DropDown.svg"
                        alt="dropdown"
                        width={24}
                        height={24}
                        priority
                    />
                </div>
            </div>
            <div className="flex p-2.5 md:p-10 justify-between border-b">
                <div>
                    <h1 className="font-bold text-2xl">Duexe</h1>
                </div>
                <div className="hidden md:flex ml-8 flex gap-12">
                    <motion.a variants={textVariants} whileHover="hover" href="/" className="underline decoration-[#FF8933]">Shop</motion.a>
                    {/* <Link href="/">New In</Link> */}
                    <motion.a variants={textVariants} whileHover="hover" href="/checkout">Checkout</motion.a>
                    {/* <Link href="/">About Us</Link> */}
                    <motion.a variants={textVariants} whileHover="hover" href="/">Cart</motion.a>
                </div>
                <div className="flex gap-4 mr-6">
                    {/* <Image
                        className=""
                        src="/Wishlist.svg"
                        alt="wishlist"
                        width={32}
                        height={32}
                        priority
                    /> */}
                    <Link href="/cart">
                        <motion.img
                            className="cursor-pointer"
                            src="/cart-icon.svg"
                            alt="cart"
                            width={32}
                            height={32}
                            priority
                            whileHover={{ scale: 1.1 }}
                        />
                    </Link>
                    <motion.img
                        className="cursor-pointer"
                        src="/search-icon.svg"
                        alt="search"
                        width={32}
                        height={32}
                        priority
                        whileHover={{ scale: 1.1 }}
                    />
                </div>
            </div>
        </>
    )
}

export default Nav