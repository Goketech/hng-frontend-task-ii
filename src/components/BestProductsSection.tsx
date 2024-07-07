import React from 'react'
import Image from "next/image";
import ProductCard from './ProductCard';

const BestProductsSection = () => {
    return (
        <div className='relative pl-10'>
            <div className="flex gap-6">
                <div className="bg-[#FF8933] rounded w-8 h-[100px]"></div>
                <div className='flex items-center'>
                    <p className='text-[#FF8933] font-semibold'>This Month</p>
                </div>
            </div>
            <div className="absolute top-[100px] right-40 flex gap-2">
                <Image className="bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                <Image className="bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
            </div>
            <h2 className='mt-2 text-4xl font-semibold mb-10'>Best Selling Products</h2>
            <div className='flex gap-6'>
                <ProductCard title="Azariah Chair" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/azariah-chair.png" />
                <ProductCard title="Jayde Dinning Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/jayde-dinning-chair.png" />
                <ProductCard title="Wade Accessories" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/wade-accessories.png" />
                <ProductCard title="Rue Sofa" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/rue-sofa.png" />
                <ProductCard title="Sally Side Table" numberOfRatings={65} oldPrice={1200} newPrice={800} productImage="/sally-side-table.png" />
                <ProductCard title="Dion Sofa" numberOfRatings={65} oldPrice={1160} newPrice={200} productImage="/dion-sofa.png" />
                <ProductCard title="Khandy Accessories" numberOfRatings={65} oldPrice={1100} newPrice={800} productImage="/khandy-accessories.png" />
            </div>
        </div>
    )
}

export default BestProductsSection