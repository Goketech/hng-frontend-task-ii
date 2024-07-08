"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import ProductCard from './ProductCard';

const ExploreProductsSection = () => {
    const buttonVariants = {
        hover: { scale: 1.05 },
    };

    return (
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className='px-2.5 md:px-10'>
                <div className="flex gap-6">
                    <div className="bg-[#FF8933] rounded w-4 md:w-8 h-[85px] md:h-[100px]"></div>
                    <div className='flex items-center'>
                        <p className='text-[#FF8933] font-semibold'>Our Products</p>
                    </div>
                </div>
                <h2 className='mt-2 text-2xl md:text-4xl font-semibold mb-4'>Explore Our Products</h2>
                <div className='hidden md:flex gap-7 mb-36'>
                    <motion.button whileHover={{ scale: 1.05 }} className='text-white rounded-full border px-6 py-2.5 bg-[#FF8933]'>All</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Chairs</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Dining Set</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Sofa Set</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Side Table</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Accessories</motion.button>
                </div>
                <div className='grid grid-cols-2 gap-2 md:hidden'>
                    <ProductCard title="Zaron Side Table" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/zaron-side-table.png" />
                    <ProductCard title="Shally Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/shally-chair.png" />
                    <ProductCard title="Lianna Sofa" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/lianna-sofa.png" />
                    <ProductCard title="Jayde Dinning Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/jayde-dinning-chair.png" />

                </div>
                <div className='hidden md:flex gap-6 mb-[71px]'>
                    <ProductCard title="Zaron Side Table" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/zaron-side-table.png" />
                    <ProductCard title="Shally Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/shally-chair.png" />
                    <ProductCard title="Lianna Sofa" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/lianna-sofa.png" />
                    <ProductCard title="Jayde Dinning Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/jayde-dinning-chair.png" />
                </div>
                <div className='hidden md:flex gap-6'>
                    <ProductCard title="Amelia Sofa" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/amelia-sofa.png" />
                    <ProductCard title="Ene Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/ene-chair.png" />
                    <ProductCard title="Venne Side Table" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/venne-side-table.png" />
                    <ProductCard title="Rionna Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/rionna-chair.png" />
                </div>
            </div>
            <div className="ml-2.5 md:ml-10 m-10 pb-10 w-[85%] border-b mb-10">
                <motion.button variants={buttonVariants} whileHover="hover" className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12">Load More</motion.button>
            </div>
        </div>
    )
}

export default ExploreProductsSection