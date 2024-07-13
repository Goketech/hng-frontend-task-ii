"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import ProductCard from './ProductCard';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { register } from "swiper/element/bundle";
import fetchData from '../utils/fetchData';

const BestProductsSection = () => {
    const swiperElRef2 = useRef<HTMLLinkElement | any>(null);
    const [bestProducts, setBestProducts] = useState<any[]>([]);
    const bestSaleId = process.env.NEXT_PUBLIC_BEST_SALE_ID || 'default_best_sale_id';

    const buttonVariants = {
        hover: { scale: 1.05 },
    };

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

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchData(bestSaleId);
            if (data) {
                setBestProducts(data.items);
                console.log(data);
            }
        };

        getProducts();
    }, [bestSaleId]);


    return (
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className='relative pl-2.5 md:pl-10'>
                <div className="flex gap-6">
                    <div className="bg-[#FF8933] rounded w-4 md:w-8 h-[85px] md:h-[100px]"></div>
                    <div className='flex items-center'>
                        <p className='text-[#FF8933] font-semibold'>This Month</p>
                    </div>
                </div>
                <div className="hidden md:flex absolute top-[100px] right-40 flex gap-2">
                    <Image onClick={handleSliderPrev2} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                    <Image onClick={handleSliderChange2} className="cursor-pointer bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
                </div>
                <h2 className='mt-2 text-2xl md:text-4xl font-semibold mb-10'>Best Selling Products</h2>
                <div className="md:hidden grid gap-2 grid-cols-2">
                    <ProductCard title="Azariah Chair" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/azariah-chair.png" />
                    <ProductCard title="Jayde Dinning Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/jayde-dinning-chair.png" />
                    <ProductCard title="Wade Accessories" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/wade-accessories.png" />
                    <ProductCard title="Rue Sofa" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/rue-sofa.png" />
                </div>
                <div className='hidden md:block'>
                    <swiper-container
                        ref={swiperElRef2}
                        slides-per-view="4"
                        init="false"
                    >
                        {bestProducts.map((product) => (
                            <swiper-slide key={product.id}>
                                <ProductCard
                                    key={product.id}
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
                        {/* <swiper-slide><ProductCard title="Sally Side Table" numberOfRatings={65} oldPrice={1200} newPrice={800} productImage="/sally-side-table.png" /></swiper-slide>
                        <swiper-slide><ProductCard title="Dion Sofa" numberOfRatings={65} oldPrice={1160} newPrice={200} productImage="/dion-sofa.png" /></swiper-slide>
                        <swiper-slide><ProductCard title="Khandy Accessories" numberOfRatings={65} oldPrice={1100} newPrice={800} productImage="/khandy-accessories.png" /></swiper-slide>
                        <swiper-slide><ProductCard title="Dee Side Table" numberOfRatings={65} oldPrice={1340} newPrice={800} productImage="/dee-side-table.png" /></swiper-slide>
                        <swiper-slide><ProductCard title="Rionna Chair" numberOfRatings={65} oldPrice={1340} newPrice={960} productImage="/rionna-chair.png" /></swiper-slide>
                        <swiper-slide><ProductCard title="Lianna Sofa" numberOfRatings={65} oldPrice={1340} newPrice={1000} productImage="/lianna-sofa.png" /></swiper-slide>
                        <swiper-slide><ProductCard title="Kelly Dining Set" numberOfRatings={65} oldPrice={1260} newPrice={800} productImage="/kelly-dining-set.png" /></swiper-slide> */}
                    </swiper-container>
                </div>
            </div>
            <div className="ml-2.5 md:ml-10 m-10 pb-10 w-[85%] border-b mb-10">
                <motion.button variants={buttonVariants} whileHover="hover" className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12">View All Products</motion.button>
            </div>
        </div>
    )
}

export default BestProductsSection