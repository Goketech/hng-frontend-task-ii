import Image from 'next/image';
import ProductCard from './ProductCard';

const ProductDetailComponent = () => {
    return (
        <div>
            <div className='pl-10 mt-20'>
                <p className='text-xl text-[#737373]'>Home / Category / Chair / <span className='text-black'>Sofia Chair</span></p>
            </div>
            <div className="flex px-28 py-16 justify-between">
                <div className="h-[655px] w-[645px] relative">
                    <Image layout="fill" objectFit="contain" className="max-w-full max-h-full" src="/sofia-chair.png" alt="chair" />
                </div>
                <div className='flex flex-col w-[373px]'>
                    <h3 className='font-semibold text-2xl mb-4'>Sofia Chair</h3>
                    <div className="flex gap-2 pb-4">
                        <div className="flex gap-1">
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/full-star.svg" alt="star" width={20} height={20} />
                            <Image src="/empty-star.svg" alt="star" width={20} height={20} />
                        </div>
                        <p className="text-[#808080] font-medium">
                            (150 Reviews) | <span className='text-[#00FF66]'>In Stock</span>
                        </p>
                    </div>
                    <h5 className='text-2xl mb-6'>$1240.00</h5>
                    <p className='pb-6 mb-6 border-b-2'>
                        Enjoy unparalleled comfort and timeless elegance with the Sofia Chair.
                        Meticulously crafted to perfection, this chair combines sophisticated
                        design with the finest materials, making it the quintessential addition
                        to any luxurious living space.
                    </p>
                    <div className='flex gap-5'>
                        <div className='border rounded border-r-0'>
                            <button className='text-4xl w-12 h-12 border-r'>-</button>
                            <input value={2} className='w-[77px] text-center font-medium text-xl' type="text" name="" id="" />
                            <button className='rounded-r bg-[#FF8933] text-4xl text-white w-12 h-12'>+</button>
                        </div>
                        <div>
                            <button className="bg-[#FF8933] text-white text-base font-medium rounded py-[12px] px-12">Buy Now</button>
                        </div>
                    </div>
                    <div className='mt-5 border-2'>
                        <div className='flex gap-4 pt-6 pb-4 px-4 border-b'>
                            <Image src="/b-icon-delivery.svg" alt="icon-delivery" width={40} height={40} />
                            <div>
                                <h6 className='font-medium text-base mb-2'>Free Delivery</h6>
                                <p className='font-medium text-xs underline'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className='flex gap-4 p-4'>
                            <Image src="/icon-return.svg" alt="icon-return" width={40} height={40} />
                            <div>
                                <h6 className='font-medium text-base mb-2'>Return Delivery</h6>
                                <p className='font-medium text-xs'>Free 30 Days Delivery Returns. <span className='underline'>Details</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pl-10'>
                <div className="flex gap-6">
                    <div className="bg-[#FF8933] rounded w-8 h-[100px]"></div>
                    <div className='flex items-center'>
                        <p className='text-[#FF8933] font-semibold'>Related Product</p>
                    </div>
                </div>
                <div className='flex mb-48'>
                    <ProductCard title="Kelly Chair" numberOfRatings={65} oldPrice={1160} newPrice={960} productImage="/kelly-chair.png" />
                    <ProductCard title="Liam Chair" numberOfRatings={65} oldPrice={1260} newPrice={940} productImage="/liam-chair.png" />
                    <ProductCard title="Sansa Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/lianna-sofa.png" />
                    <ProductCard title="JPearl Chair" numberOfRatings={65} oldPrice={1060} newPrice={900} productImage="/pearl-chair.png" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailComponent;
