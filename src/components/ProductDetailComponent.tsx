"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { useCart } from '@/context/CartContext';
import { ProductCardProps } from '../types/type';


const ProductDetailComponent: React.FC<ProductCardProps> = ({ product }) => {
    const [count, setCount] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const { addToCart, cart } = useCart();

    if (typeof product !== 'object' || product === null) {
        return (
            <div className="error-container">
                <h2>Error: Product not found</h2>
            </div>
        );
    }

    const handleIncrement = () => {
        setCount((prevCount) => Math.min(prevCount + 1, 20));
    };

    const handleDecrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: count });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    return (
        <div className='max-w-screen-2xl 2xl:mx-auto'>
            <div className='pl-2.5 md:pl-10 mt-20'>
                <p className='text-xl text-[#737373]'>Home / Category / Chair / <span className='text-black'>{product.name}</span></p>
            </div>
            <div className="flex flex-col md:flex-row px-2.5 md:px-28 py-16 justify-between">
                <div className="h-[655px] w-full md:w-[645px] relative">
                    <Image layout="fill" objectFit="contain" className="max-w-full max-h-full" src={
                        product.photos?.length > 0
                            ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                            : 'https://api.timbu.cloud/images/default_image.jpg'
                    } alt="chair" />
                </div>
                <div className='flex flex-col w-[373px]'>
                    <h3 className='font-semibold text-2xl mb-4'>{product.name}</h3>
                    <div className="flex gap-2 pb-4">
                        <div className="flex gap-1">
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/empty-star.svg" alt="star" width={20} height={20} />
                        </div>
                        <p className="text-[#808080] font-medium">
                            (150 Reviews) | <span className='text-[#00FF66]'>In Stock</span>
                        </p>
                    </div>
                    <h5 className='text-2xl mb-6'>${product.current_price}</h5>
                    <p className='pb-6 mb-6 border-b-2'>
                        {product.description}
                    </p>
                    <div className='flex gap-5'>
                        <div className='border rounded border-r-0'>
                            <button onClick={handleDecrement} className='text-4xl w-12 h-12 border-r'>-</button>
                            <input value={count} readOnly className='w-[77px] text-center font-medium text-xl' type="text" name="" id="" />
                            <button onClick={handleIncrement} className='rounded-r bg-[#FF8933] text-4xl text-white w-12 h-12'>+</button>
                        </div>
                        <div>
                            <motion.button whileHover={{ scale: 1.05 }} className="bg-[#FF8933] text-white text-base font-medium rounded py-[12px] px-12" onClick={handleAddToCart}>Buy Now</motion.button>
                        </div>
                    </div>
                    <div className='mt-5 border-2'>
                        <div className='flex gap-4 pt-6 pb-4 px-4 border-b'>
                            <Image src="/b-icon-delivery.svg" alt="icon-delivery" width={40} height={40} />
                            <div>
                                <h6 className='font-medium text-base mb-2'>Free Delivery</h6>
                                <p className='font-medium text-xs underline'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className='flex gap-4 p-4'>
                            <Image src="/Icon-return.svg" alt="icon-return" width={40} height={40} />
                            <div>
                                <h6 className='font-medium text-base mb-2'>Return Delivery</h6>
                                <p className='font-medium text-xs'>Free 30 Days Delivery Returns. <span className='underline'>Details</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
                    Product added to cart!
                </div>
            )}
            <div className='pl-2.5 md:pl-10'>
                <div className="flex gap-3 md:gap-6">
                    <div className="bg-[#FF8933] rounded w-4 md:w-8 h-[85px] md:h-[100px]"></div>
                    <div className='flex items-center'>
                        <p className='text-[#FF8933] font-semibold'>Related Product</p>
                    </div>
                </div>
                <div className=' grid gap-2 md:gap-0 grid-cols-2 mt-2 md:mt-0 md:flex mb-48'>
                    <ProductCard id='add47a98dbb941889dd2c17b249cee7d' title="Kelly Chair" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/kelly-chair.png" />
                    <ProductCard id='36197ea5bc444fa69375f7c538fa61dc' title="Liam Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/sansa-chair.png" />
                    <ProductCard id='51fde2be5cd5490f9e052e824758acae' title="Lianna Sofa" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/lianna-sofa.png" />
                    <ProductCard id='670965f273fe4d21b8fb5e9630433360' title="Pearl Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/pearl-chair.png" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailComponent;
