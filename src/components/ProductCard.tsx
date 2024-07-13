"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

interface CardProps {
    title: string;
    productImage: string;
    numberOfRatings: number;
    oldPrice: number;
    newPrice: number;
}

const ProductCard: React.FC<CardProps> = ({
    title,
    productImage,
    numberOfRatings, oldPrice, newPrice }) => {
    return (
        <Link href="/productpage">
            <motion.div whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }} className='border relative rounded-lg md:mr-6 cursor-pointer'>
                {/* <div className='p-4 mb-4 absolute right-4'>
                <Image
                    className=""
                    src="/Wishlist.svg"
                    alt="wishlist"
                    width={32}
                    height={32}
                    priority
                />
            </div> */}
                <div className='flex justify-center items-center h-72 md:mt-14 md:mb-10'>
                    <Image
                        src={productImage}
                        alt="product"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
                <div className='bg-[#F5F5F5] pt-px'>
                    <div className='flex justify-between mt-8 mb-2 px-4'>
                        <p className='font-bold'>{title}</p>
                        <div className='rounded-full bg-[#FF8933] p-2'>
                            <Image
                                src="/white-shop.svg"
                                alt="shop"
                                width={32}
                                height={32}
                            />
                        </div>
                    </div>
                    <div className='mb-2 px-4'>
                        <span className='text-[#DB4444] font-medium mr-2'>${newPrice}</span>
                        <span className='text-[#808080] font-medium line-through'> ${oldPrice}</span>
                    </div>
                    <div className='flex gap-2 px-4 pb-4'>
                        <div className='flex md:gap-1'>
                            <Image
                                src="/full-star.svg"
                                alt="star"
                                width={20}
                                height={20}
                            />
                            <Image
                                src="/full-star.svg"
                                alt="star"
                                width={20}
                                height={20}
                            />
                            <Image
                                src="/full-star.svg"
                                alt="star"
                                width={20}
                                height={20}
                            />
                            <Image
                                src="/full-star.svg"
                                alt="star"
                                width={20}
                                height={20}
                            />
                            <Image
                                src="/half-star.svg"
                                alt="star"
                                width={20}
                                height={20}
                            />
                        </div>
                        <p className='text-[#808080] font-medium'>({numberOfRatings})</p>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProductCard