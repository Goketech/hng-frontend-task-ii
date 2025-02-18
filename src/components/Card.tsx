"use client"

import { motion } from 'framer-motion';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { ProductCardProps } from '../types/type';

const Card: React.FC<ProductCardProps> = ({ discountPercentage,
    title,
    id,
    productImage,
    numberOfRatings, oldPrice, newPrice }) => {
    return (
        <Link href={`/products/${id}`}>
            <motion.div whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }} className='p-2 border rounded-lg md:mr-6 cursor-pointer pt-4'>
                <div className='flex justify-between items-center h-auto'>
                    <p className='bg-[#DB4444] px-3 py-1 rounded-lg text-white'>{discountPercentage}</p>
                    {/* <Image
                    className=""
                    src="/Wishlist.svg"
                    alt="wishlist"
                    width={32}
                    height={32}
                    priority
                /> */}
                </div>
                <div className='flex justify-center items-center h-72 mt-14'>
                    <Image
                        src={productImage}
                        alt="product"
                        width={300}
                        height={300}
                    />
                </div>
                <div className='flex justify-between mt-8 mb-2'>
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
                <div className='mb-2'>
                    <span className='text-[#DB4444] font-medium mr-2'>${newPrice}</span>
                    <span className='text-[#808080] font-medium line-through'> ${oldPrice}</span>
                </div>
                <div className='flex gap-2'>
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
                            src="/full-star.svg"
                            alt="star"
                            width={20}
                            height={20}
                        />
                    </div>
                    <p className='text-[#808080] font-medium'>({numberOfRatings})</p>
                </div>
            </motion.div>
        </Link>
    )
}

export default Card