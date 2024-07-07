import React from 'react'
import Image from "next/image";
import ProductCard from './ProductCard';

const ExploreProductsSection = () => {
    return (
        <>
            <div className='px-10'>
                <div className="flex gap-6">
                    <div className="bg-[#FF8933] rounded w-8 h-[100px]"></div>
                    <div className='flex items-center'>
                        <p className='text-[#FF8933] font-semibold'>Our Products</p>
                    </div>
                </div>
                <h2 className='mt-2 text-4xl font-semibold mb-4'>Explore Our Products</h2>
                <div className='flex gap-7 mb-36'>
                    <button className='text-white rounded-full border px-6 py-2.5 bg-[#FF8933]'>All</button>
                    <button className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Chairs</button>
                    <button className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Dining Set</button>
                    <button className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Sofa Set</button>
                    <button className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Side Table</button>
                    <button className='rounded-full border px-6 py-2.5 border-[#FF8933]'>Accessories</button>
                </div>
                <div className='flex gap-6 mb-[71px]'>
                    <ProductCard title="Zaron Side Table" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/zaron-side-table.png" />
                    <ProductCard title="Shally Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/shally-chair.png" />
                    <ProductCard title="Lianna Sofa" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/lianna-sofa.png" />
                    <ProductCard title="Jayde Dinning Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/jayde-dinning-chair.png" />
                </div>
                <div className='flex gap-6'>
                    <ProductCard title="Amelia Sofa" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/amelia-sofa.png" />
                    <ProductCard title="Ene Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/ene-chair.png" />
                    <ProductCard title="Venne Side Table" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/venne-side-table.png" />
                    <ProductCard title="Rionna Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/rionna-chair.png" />
                </div>
            </div>
            <div className="m-10 pb-10 w-[85%] border-b mb-10">
                <button className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12">Load More</button>
            </div>
        </>
    )
}

export default ExploreProductsSection