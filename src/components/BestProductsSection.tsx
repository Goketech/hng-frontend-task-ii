import React from 'react'
import Image from "next/image";

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
            <h2 className='mt-2 text-4xl font-semibold'>Best Selling Products</h2>
        </div>
    )
}

export default BestProductsSection