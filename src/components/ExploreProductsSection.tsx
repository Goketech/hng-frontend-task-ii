'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductCard from './ProductCard';
import fetchData from '../utils/fetchData';
import { Product } from '../types/types';

const ExploreProductsSection = () => {
    const [exploreProducts, setExploreProducts] = useState<Product[]>([]);
    const [chairProducts, setChairProducts] = useState<Product[]>([]);
    const [diningProducts, setDiningProducts] = useState<Product[]>([]);
    const [sofaProducts, setSofaProducts] = useState<Product[]>([]);
    const [sideProducts, setSideProducts] = useState<Product[]>([]);
    const [accessoryProducts, setAccessoryProducts] = useState<Product[]>([]);
    const [currentSection, setCurrentSection] = useState<string>('explore');
    const [loadingExplore, setLoadingExplore] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 8;

    const exploreId = process.env.NEXT_PUBLIC_EXPLORE_ID || '';
    const chairId = process.env.NEXT_PUBLIC_CHAIR_ID || 'default_best_sale_id';
    const diningId = process.env.NEXT_PUBLIC_DINING_ID || 'default_best_sale_id';
    const sofaId = process.env.NEXT_PUBLIC_SOFA_ID || 'default_best_sale_id';
    const sideId = process.env.NEXT_PUBLIC_SIDE_ID || 'default_best_sale_id';
    const accessoryId = process.env.NEXT_PUBLIC_ACCESSORY_ID || 'default_best_sale_id';

    const buttonVariants = {
        hover: { scale: 1.05 },
    };

    useEffect(() => {
        const getExploreProducts = async () => {
            setLoadingExplore(true);
            const data = await fetchData('all');
            if (data) {
                setExploreProducts(data.items);
            }
            setLoadingExplore(false);
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

    const getPaginatedData = (products: Product[]) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        console.log(startIndex);
        console.log(products.slice(startIndex, startIndex + itemsPerPage));
        return products.slice(startIndex, startIndex + itemsPerPage);
    };

    const Pagination = ({ totalItems }: { totalItems: number }) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pages = [];
        
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
    
        return (
            <div className="flex justify-center space-x-2 mt-4">
                {pages.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => page !== '...' && setCurrentPage(page as number)}
                        className={`px-4 py-2 ${currentPage === page ? 'bg-[#FF8933] text-white' : 'bg-white text-black border'}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        );
    };
    
    return (
        <div id='allProducts' className="max-w-screen-2xl 2xl:mx-auto">
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
                            setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'explore' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        All
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('chair');
                            setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'chair' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Chairs
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('dining');
                            setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'dining' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Dining Set
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('sofa');
                            setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'sofa' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Sofa Set
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('side');
                            setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'side' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Side Table
                    </motion.button>
                    <motion.button
                        onClick={() => {
                            setCurrentSection('accessory');
                            setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`${currentSection === 'accessory' ? 'text-white rounded-full border px-6 py-2.5 bg-[#FF8933]' : 'rounded-full border px-6 py-2.5 border-[#FF8933]'}`}
                    >
                        Accessories
                    </motion.button>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-x-0 md:gap-y-4">
                    {currentSection === 'explore' && (loadingExplore ? (
                        <p>Loading Explore Products...</p>
                    ) : (
                        getPaginatedData(exploreProducts).map((product) => (
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
                        ))))}
                    {currentSection === 'chair' &&
                        getPaginatedData(chairProducts).map((product) => (
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
                        getPaginatedData(diningProducts).map((product) => (
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
                        getPaginatedData(sofaProducts).map((product) => (
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
                        getPaginatedData(sideProducts).map((product) => (
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
                        getPaginatedData(accessoryProducts).map((product) => (
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
                <Pagination totalItems={currentSection === 'explore' ? exploreProducts.length : 
                    currentSection === 'chair' ? chairProducts.length : 
                    currentSection === 'dining' ? diningProducts.length : 
                    currentSection === 'sofa' ? sofaProducts.length : 
                    currentSection === 'side' ? sideProducts.length : 
                    accessoryProducts.length} />
            </div>
        </div>
    );
};

export default ExploreProductsSection;
