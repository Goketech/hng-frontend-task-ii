import React from 'react'
import Image from "next/image";
import ProductCard from './ProductCard';

const ExploreProductsSection = () => {
    return (
        <>
            <div className='relative pl-10'>
                <div className="flex gap-6">
                    <div className="bg-[#FF8933] rounded w-8 h-[100px]"></div>
                    <div className='flex items-center'>
                        <p className='text-[#FF8933] font-semibold'>Our Products</p>
                    </div>
                </div>
                <div className="absolute top-[100px] right-40 flex gap-2">
                    <Image className="bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                    <Image className="bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
                </div>
                <h2 className='mt-2 text-4xl font-semibold mb-10'>Explore Our Products</h2>
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