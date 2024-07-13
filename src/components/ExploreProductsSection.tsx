'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductCard from './ProductCard';
import fetchData from '../utils/fetchData';

const ExploreProductsSection = () => {
    const [exploreProducts, setExploreProducts] = useState<any[]>([]);
    const [chairProducts, setChairProducts] = useState<any[]>([]);
    const [diningProducts, setDiningProducts] = useState<any[]>([]);
    const [sofaProducts, setSofaProducts] = useState<any[]>([]);
    const [sideProducts, setSideProducts] = useState<any[]>([]);
    const [accessoryProducts, setAccessoryProducts] = useState<any[]>([]);
    const [currentSection, setCurrentSection] = useState<string>('explore');
    const exploreId =
        process.env.NEXT_PUBLIC_EXPLORE_ID || 'default_best_sale_id';
    const chairId = process.env.NEXT_PUBLIC_CHAIR_ID || 'default_best_sale_id';
    const diningId = process.env.NEXT_PUBLIC_DINING_ID || 'default_best_sale_id';
    const sofaId = process.env.NEXT_PUBLIC_SOFA_ID || 'default_best_sale_id';
    const sideId = process.env.NEXT_PUBLIC_SIDE_ID || 'default_best_sale_id';
    const accessoryId =
        process.env.NEXT_PUBLIC_ACCESSORY_ID || 'default_best_sale_id';

    const buttonVariants = {
        hover: { scale: 1.05 },
    };

    useEffect(() => {
        const getExploreProducts = async () => {
            const data = await fetchData(exploreId);
            if (data) {
                setExploreProducts(data.items);
            }
        };

        const getChairProducts = async () => {
            const data = await fetchData(chairId);
            if (data) {
                setChairProducts(data.items);
            }
        };

        const getDiningProducts = async () => {
            const data = await fetchData(diningId);
            if (data) {
                setDiningProducts(data.items);
            }
        };

        const getSofaProducts = async () => {
            const data = await fetchData(sofaId);
            if (data) {
                setSofaProducts(data.items);
            }
        };

        const getSideProducts = async () => {
            const data = await fetchData(sideId);
            if (data) {
                setSideProducts(data.items);
            }
        };

        const getAccessoryProducts = async () => {
            const data = await fetchData(accessoryId);
            if (data) {
                setAccessoryProducts(data.items);
            }
        };

        getExploreProducts();
        getChairProducts();
        getDiningProducts();
        getSofaProducts();
        getSideProducts();
        getAccessoryProducts();
    }, []);

    return (
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className="px-2.5 md:px-10">
                <div className="flex gap-3 md:gap-6">
                    <div className="bg-[#FF8933] rounded w-4 md:w-8 h-[85px] md:h-[100px]"></div>
                    <div className="flex items-center">
                        <p className="text-[#FF8933] font-semibold">Our Products</p>
                    </div>
                </div>
                <h2 className="mt-2 text-2xl md:text-4xl font-semibold mb-4">
                    Explore Our Products
                </h2>
                <div className="hidden md:flex gap-7 mb-36">
                    <motion.button
                        onClick={() => {
                            setCurrentSection('explore');
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'explore' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        All
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('chair');
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'chair' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Chairs
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('dining');
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'dining' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Dining Set
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('sofa');
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'sofa' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Sofa Set
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('side');
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'side' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Side Table
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('accessory');
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'accessory' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Accessories
                    </motion.button>
                </div>
                <div className="grid grid-cols-2 gap-2 md:hidden">
                    {currentSection === 'explore' &&
                        exploreProducts.map((product) => (
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
                    {currentSection === 'chair' &&
                        chairProducts.map((product) => (
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
                    {currentSection === 'dining' &&
                        diningProducts.map((product) => (
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
                    {currentSection === 'sofa' &&
                        sofaProducts.map((product) => (
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
                    {currentSection === 'side' &&
                        sideProducts.map((product) => (
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
                    {currentSection === 'accessory' &&
                        accessoryProducts.map((product) => (
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
                <div className="hidden md:grid grid-cols-4 gap-x-0 gap-y-4">
                    {currentSection === 'chair' &&
                        chairProducts.map((product) => (
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
                    {currentSection === 'explore' &&
                        exploreProducts.map((product) => (
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
                    {currentSection === 'dining' &&
                        diningProducts.map((product) => (
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
                    {currentSection === 'sofa' &&
                        sofaProducts.map((product) => (
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
                    {currentSection === 'side' &&
                        sideProducts.map((product) => (
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
                    {currentSection === 'accessory' &&
                        accessoryProducts.map((product) => (
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
            </div>
            <div className="ml-2.5 md:ml-10 m-10 pb-10 w-[85%] border-b mb-10">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12"
                >
                    Load More
                </motion.button>
            </div>
        </div>
    );
};

export default ExploreProductsSection;
