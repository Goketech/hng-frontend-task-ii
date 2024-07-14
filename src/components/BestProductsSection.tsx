'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { register } from 'swiper/element/bundle';
import fetchData from '../utils/fetchData';
import Link from 'next/link';
import { Product } from '../types/types';

const BestProductsSection = () => {
    const swiperElRef2 = useRef<HTMLLinkElement | any>(null);
    const [bestProducts, setBestProducts] = useState<Product[]>([]);
    const bestSaleId = process.env.NEXT_PUBLIC_BEST_SALE_ID || 'default_best_sale_id';
    const [loading, setLoading] = useState<boolean>(true);

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
            setLoading(true);
            const data = await fetchData(bestSaleId);
            if (data) {
                setBestProducts(data.items);
            }
            setLoading(false);
        };

        getProducts();
    }, [bestSaleId]);

    return (
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className="relative pl-2.5 md:pl-10">
                <div className="flex gap-6">
                    <div className="bg-[#FF8933] rounded w-4 md:w-8 h-[85px] md:h-[100px]"></div>
                    <div className="flex items-center">
                        <p className="text-[#FF8933] font-semibold">This Month</p>
                    </div>
                </div>
                <div className="hidden md:flex absolute top-[100px] right-40 flex gap-2">
                    <Image
                        onClick={handleSliderPrev2}
                        className="cursor-pointer bg-[#f5f5f5] rounded-full p-2"
                        src="/icons_arrow-left.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                    />
                    <Image
                        onClick={handleSliderChange2}
                        className="cursor-pointer bg-[#f5f5f5] rounded-full p-2"
                        src="/icons_arrow-right.svg"
                        alt="arrow"
                        width={32}
                        height={32}
                    />
                </div>
                <h2 className="mt-2 text-2xl md:text-4xl font-semibold mb-10">
                    Best Selling Products
                </h2>
                {loading ? (
                    <div className="md:hidden flex justify-center items-center h-64">
                        <p className="text-gray-500 text-lg">Loading...</p>
                    </div>
                ) : (
                    <div className="md:hidden grid gap-2 grid-cols-2">
                        {bestProducts.map((product) => (
                            <ProductCard
                                id={product.id}
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
                        ))}
                    </div>
                )}
                <div className="hidden md:block">
                    <swiper-container ref={swiperElRef2} slides-per-view="4" init="false">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <p className="text-black-500 text-lg">Loading...</p>
                            </div>
                        ) : (
                            <>
                                {bestProducts.map((product) => (
                                    <swiper-slide key={product.id}>
                                        <ProductCard
                                            id={product.id}
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
                            </>
                        )}
                    </swiper-container>
                </div>
            </div>
            <div className="ml-2.5 md:ml-10 m-10 pb-10 w-[85%] border-b mb-10">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12"
                >
                    <Link href="#allProducts">
                        View All Products
                    </Link>
                </motion.button>
            </div>
        </div>
    );
};

export default BestProductsSection;
