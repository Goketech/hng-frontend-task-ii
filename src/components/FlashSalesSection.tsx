"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Card from "./Card";
import Image from "next/image";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { register } from "swiper/element/bundle";
import fetchData from '../utils/fetchData';

const FlashSalesSection = () => {
    const swiperElRef = useRef<HTMLLinkElement | any>(null);
    const [flashProducts, setFlashProducts] = useState<any[]>([]);
    const flashSaleId = process.env.NEXT_PUBLIC_FLASH_SALE_ID || 'default_flash_sale_id';
    const [loading, setLoading] = useState<boolean>(true);

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

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const data = await fetchData(flashSaleId);
            if (data) {
                setFlashProducts(data.items);
            }
            setLoading(false);
        };

        getProducts();
    }, [flashSaleId]);

    return (
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className="relative pl-2.5 md:pl-10">
                <div className="hidden absolute top-[-50px] right-40 md:flex gap-2">
                    <Image id="prev" onClick={handleSliderPrev} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                    <Image id="next" onClick={handleSliderChange} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
                </div>
                {loading ? (
                    <div className="md:hidden flex justify-center items-center h-64">
                        <p className="text-gray-500 text-lg">Loading...</p>
                    </div>
                ) : (
                    <div className="md:hidden grid gap-2 grid-cols-2">
                        {flashProducts.map((product) => (
                            <Card
                                id={product.id}
                                key={product.id}
                                discountPercentage="-35%"
                                title={product.name}
                                numberOfRatings={85}
                                oldPrice={product.current_price[0].USD[0]}
                                newPrice={product.current_price[0].USD[1]}
                                productImage={
                                    product.photos.length > 0
                                        ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                                        : 'https://api.timbu.cloud/images/default_image.jpg'
                                }
                            />
                        ))}
                    </div>
                )}
                <div className='hidden md:block'>
                    <swiper-container
                        ref={swiperElRef}
                        slides-per-view="4"
                        init="false"
                    >
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <p className="text-black-500 text-lg">Loading...</p>
                            </div>
                        ) : (
                            <>
                                {flashProducts.map((product) => (
                                    <swiper-slide key={product.id}>
                                        <Card
                                            id={product.id}
                                            discountPercentage="-35%"
                                            title={product.name}
                                            numberOfRatings={85}
                                            oldPrice={product.current_price[0].USD[0]}
                                            newPrice={product.current_price[0].USD[1]}
                                            productImage={
                                                product.photos.length > 0
                                                    ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                                                    : 'https://api.timbu.cloud/images/default_image.jpg'
                                            }
                                        />
                                    </swiper-slide>
                                ))}
                            </>
                        )}

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