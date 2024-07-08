"use client"

import { useEffect, useRef } from 'react';
import Image from "next/image";
import ProductCard from './ProductCard';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { register } from "swiper/element/bundle";

const BestProductsSection = () => {
    const swiperElRef2 = useRef<HTMLLinkElement | any>(null);

    useEffect(() => {
        register();

        const swiperContainer2 = swiperElRef2.current;

        Object.assign(swiperContainer2);
        swiperContainer2.initialize();
    }, []);

    const handleSliderChange2 = () => {
        const swiperContainer = swiperElRef2.current?.swiper;
        swiperContainer.slideNext();
    };

    const handleSliderPrev2 = () => {
        const swiperContainer = swiperElRef2.current?.swiper;
        swiperContainer.slidePrev();
    };

    return (
        <>
            <div className='relative pl-10'>
                <div className="flex gap-6">
                    <div className="bg-[#FF8933] rounded w-8 h-[100px]"></div>
                    <div className='flex items-center'>
                        <p className='text-[#FF8933] font-semibold'>This Month</p>
                    </div>
                </div>
                <div className="absolute top-[100px] right-40 flex gap-2">
                    <Image onClick={handleSliderPrev2} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                    <Image onClick={handleSliderChange2} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
                </div>
                <h2 className='mt-2 text-4xl font-semibold mb-10'>Best Selling Products</h2>
                {/* <div className='flex gap-6'> */}
                <swiper-container
                    ref={swiperElRef2}
                    slides-per-view="4"
                    init="false"
                >
                    <swiper-slide><ProductCard title="Azariah Chair" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/azariah-chair.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Jayde Dinning Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/jayde-dinning-chair.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Wade Accessories" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/wade-accessories.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Rue Sofa" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/rue-sofa.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Sally Side Table" numberOfRatings={65} oldPrice={1200} newPrice={800} productImage="/sally-side-table.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Dion Sofa" numberOfRatings={65} oldPrice={1160} newPrice={200} productImage="/dion-sofa.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Khandy Accessories" numberOfRatings={65} oldPrice={1100} newPrice={800} productImage="/khandy-accessories.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Dee Side Table" numberOfRatings={65} oldPrice={1340} newPrice={800} productImage="/dee-side-table.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Rionna Chair" numberOfRatings={65} oldPrice={1340} newPrice={960} productImage="/rionna-chair.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Lianna Sofa" numberOfRatings={65} oldPrice={1340} newPrice={1000} productImage="/lianna-sofa.png" /></swiper-slide>
                    <swiper-slide><ProductCard title="Kelly Dining Set" numberOfRatings={65} oldPrice={1260} newPrice={800} productImage="/kelly-dining-set.png" /></swiper-slide>
                </swiper-container>
                {/* </div> */}
            </div>
            <div className="m-10 pb-10 w-[85%] border-b mb-10">
                <button className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12">View All Products</button>
            </div>
        </>
    )
}

export default BestProductsSection