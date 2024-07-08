"use client"

import { useEffect, useRef } from 'react';
import Card from "./Card";
import Image from "next/image";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { register } from "swiper/element/bundle";

const FlashSalesSection = () => {
    const swiperElRef = useRef<HTMLLinkElement | any>(null);   

    useEffect(() => {
        register(); 

        const swiperContainer = swiperElRef.current;

        Object.assign(swiperContainer);
        swiperContainer.initialize();
    }, []);

    const handleSliderChange = () => {
        const swiperContainer = swiperElRef.current?.swiper;
        swiperContainer.slideNext();
    };

    const handleSliderPrev = () => {
        const swiperContainer = swiperElRef.current?.swiper;
        swiperContainer.slidePrev();
    };

    return (
        <>
            <div className="relative">
                <div className="absolute top-[-50px] right-40 flex gap-2">
                    <Image id="prev" onClick={handleSliderPrev} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                    <Image id="next" onClick={handleSliderChange} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
                </div>
                {/* <div className="flex flex-shrink-0 mt-10 gap-6 pl-10 pr"> */}
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="4"
                    init="false"
                    class="pl-10"
                >
                    <swiper-slide><Card discountPercentage="-35%" title="Kabir Chair" numberOfRatings={88} oldPrice={160} newPrice={120} productImage="/kabir-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Asara Chair" numberOfRatings={86} oldPrice={160} newPrice={110} productImage="/asara-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Chidi Chair" numberOfRatings={85} oldPrice={160} newPrice={120} productImage="/chidi-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Zadok Chair" numberOfRatings={85} oldPrice={180} newPrice={110} productImage="/zadok-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Lanre Chair" numberOfRatings={85} oldPrice={170} newPrice={110} productImage="/lanre-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Ezra Chair" numberOfRatings={85} oldPrice={160} newPrice={100} productImage="/ezra-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Kelly Chair" numberOfRatings={85} oldPrice={1240} newPrice={920} productImage="/kelly-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Zoe Chair" numberOfRatings={85} oldPrice={1340} newPrice={960} productImage="/zoe-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Liam Chair" numberOfRatings={85} oldPrice={1340} newPrice={1000} productImage="/liam-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Zen Chair" numberOfRatings={85} oldPrice={1340} newPrice={1000} productImage="/zen-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Sofia Chair" numberOfRatings={85} oldPrice={1400} newPrice={1240} productImage="/sofia-chair.png" /></swiper-slide>
                    <swiper-slide><Card discountPercentage="-35%" title="Pearl Chair" numberOfRatings={85} oldPrice={1340} newPrice={1260} productImage="/pearl-chair.png" /></swiper-slide>
                </swiper-container>
                {/* </div> */}
            </div>
            <div className="m-10 pb-10 w-[85%] border-b mb-10">
                <button className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12">View All Products</button>
            </div>
        </>
    )
}

export default FlashSalesSection