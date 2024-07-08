"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Card from "./Card";
import Image from "next/image";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { register } from "swiper/element/bundle";

const FlashSalesSection = () => {
    const swiperElRef = useRef<HTMLLinkElement | any>(null);

    const buttonVariants = {
        hover: { scale: 1.05 },
    };

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
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className="relative pl-2.5 md:pl-10">
                <div className="hidden absolute top-[-50px] right-40 md:flex gap-2">
                    <Image id="prev" onClick={handleSliderPrev} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                    <Image id="next" onClick={handleSliderChange} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
                </div>
                <div className="md:hidden grid gap-2 grid-cols-2">
                    <Card discountPercentage="-35%" title="Kabir Chair" numberOfRatings={88} oldPrice={160} newPrice={120} productImage="/kabir-chair.png" />
                    <Card discountPercentage="-35%" title="Asara Chair" numberOfRatings={86} oldPrice={160} newPrice={110} productImage="/asara-chair.png" />
                    <Card discountPercentage="-35%" title="Chidi Chair" numberOfRatings={85} oldPrice={160} newPrice={120} productImage="/chidi-chair.png" />
                    <Card discountPercentage="-35%" title="Zadok Chair" numberOfRatings={85} oldPrice={180} newPrice={110} productImage="/zadok-chair.png" />
                </div>
                <div className='hidden md:block'>
                    <swiper-container
                        ref={swiperElRef}
                        slides-per-view="4"
                        init="false"
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
                </div>
            </div>
            <div className="ml-2.5 md:ml-10 m-10 pb-10 w-[85%] border-b mb-10">
                <motion.button variants={buttonVariants} whileHover="hover" className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-6 md:px-12">View All Products</motion.button>
            </div>
        </div>
    )
}

export default FlashSalesSection