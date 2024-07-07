import React from 'react';
import Image from "next/image";

interface ProductCardProps {
    discountPercentage: string;
    title: string;
    productImage: string;
    starIcons: JSX.Element[];
    numberOfRatings: number;
    oldPrice: number;
    newPrice: number;
}

const Card: React.FC<ProductCardProps> = ({ discountPercentage,
    title,
    productImage,
    numberOfRatings, oldPrice, newPrice }) => {
    return (
        <div className='p-2 border rounded-lg'>
            <div className='flex justify-between items-center h-auto mb-4'>
                <span className='bg-[#DB4444] px-3 py-1 rounded-lg text-white'>{discountPercentage}</span>
                {/* <Image
                    className=""
                    src="/Wishlist.svg"
                    alt="wishlist"
                    width={32}
                    height={32}
                    priority
                /> */}
            </div>
            <div className='flex justify-center items-center h-72'>
                <Image
                    src={productImage}
                    alt="product"
                    width={300}
                    height={300}
                />
            </div>
            <div className='flex justify-between mt-8 mb-2'>
                <p className='font-bold'>{title}</p>
                <Image
                    src="/shop.svg"
                    alt="shop"
                    width={32}
                    height={32}
                />
            </div>
            <div className='mb-2'>
                <span className='text-[#DB4444] font-medium mr-2'>${newPrice}</span>
                <span className='text-[#808080] font-medium line-through'> ${oldPrice}</span>
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-1'>
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
        </div>
    )
}

export default Card