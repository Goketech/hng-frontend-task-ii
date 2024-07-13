"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useState, useRef } from 'react';

export interface Product {
    id: string;
    name: string;
    current_price: number;
    photos: any;
    quantity: number;
}

const CheckoutComponent = () => {
    const { cart, clearCart } = useCart();
    const [formFilled, setFormFilled] = useState(false);
    const [showFormPopup, setShowFormPopup] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const buttonVariants = {
        hover: { scale: 1.05 },
    };

    const handlePlaceOrder = () => {
        const requiredFields = ['firstName', 'streetAddress', 'city', 'phoneNumber', 'email'];
        const formValid = requiredFields.every(field => !!(document.getElementById(field) as HTMLInputElement)?.value);

        if (!formValid) {
            setShowFormPopup(true);
            setTimeout(() => setShowFormPopup(false), 3000);
        }
        if (cart.length === 0) {
            setShowCartPopup(true);
            setTimeout(() => setShowCartPopup(false), 3000);
        }
        else {
            // Clear cart and show success message
            clearCart();
            alert('Order received successfully!');
            if (formRef.current) {
                formRef.current.reset();
                setFormFilled(false);
            }
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Check if all required fields are filled on any input change
        const requiredFields = ['firstName', 'streetAddress', 'city', 'phoneNumber', 'email'];
        const formValid = requiredFields.every(field => !!(document.getElementById(field) as HTMLInputElement)?.value);
        setFormFilled(formValid);
    };

    return (
        <div className='max-w-screen-2xl 2xl:mx-auto'>
            <div className='pl-2.5 md:pl-10 mt-20'>
                <p className='text-xl text-[#737373]'>Home / Category / Product / View Cart / <span className='text-black'>Checkout</span></p>
            </div>
            <div className='flex flex-col md:flex-row p-2.5 md:p-20 justify-between mb-32'>
                <div>
                    <h2 className='text-4xl font-medium mb-12'>Billing Details</h2>
                    <form ref={formRef}>
                        <div className='flex flex-col gap-8 text-[#999999]'>
                            <div className='flex flex-col'>
                                <label className='mb-2' htmlFor="firstName">First Name<span className='text-[#DF1C41]'>*</span></label>
                                <input className='bg-[#F5F5F5] py-3.5' type="text" name='firstName' id='firstName' required onChange={handleInputChange} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2' htmlFor="lastName">Last Name</label>
                                <input className='bg-[#F5F5F5] py-3.5' type="text" name='lastName' id='lastName' onChange={handleInputChange} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2' htmlFor="streetAddress">Street Address<span className='text-[#DF1C41]'>*</span></label>
                                <input className='bg-[#F5F5F5] py-3.5' type="text" name='streetAddress' id='streetAddress' required onChange={handleInputChange} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2' htmlFor="apartment">Apartment, floor, etc. (optional)</label>
                                <input className='bg-[#F5F5F5] py-3.5' type="text" name='apartment' id='apartment' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2' htmlFor="city">Town/City<span className='text-[#DF1C41]'>*</span></label>
                                <input className='bg-[#F5F5F5] py-3.5' type="text" name='city' id='city' required onChange={handleInputChange} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2' htmlFor="phoneNumber">Phone Number<span className='text-[#DF1C41]'>*</span></label>
                                <input className='bg-[#F5F5F5] py-3.5' type="text" name='phoneNumber' id='phoneNumber' required onChange={handleInputChange} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2' htmlFor="email">Email Address<span className='text-[#DF1C41]'>*</span></label>
                                <input className='bg-[#F5F5F5] py-3.5' type="text" name='email' id='email' required onChange={handleInputChange} />
                            </div>
                            <div className='flex gap-4'>
                                <input className='accent-[#FF8933] color bg-white' type="checkbox" name="" id="" />
                                <p className='text-black'>Save this information for faster check-out next time</p>
                            </div>
                        </div>
                    </form>

                </div>
                <div>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((product: Product, index: number) => (
                            <div key={index} className='py-2 px-4 flex items-center justify-between'>
                                <div className='py-4 pr-4 flex items-center gap-4'>
                                    <div>
                                        <Image src={product.photos?.length > 0
                                            ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                                            : 'https://api.timbu.cloud/images/default_image.jpg'} alt="chair" width={54} height={54} />
                                    </div>
                                    <div>
                                        <p className='font-medium'>{product.name}</p>
                                        <p className='font-medium'>X{product.quantity}</p>
                                    </div>
                                </div>
                                <div className='py-4'>${product.current_price * product.quantity}</div>
                            </div>
                        ))
                    )}
                    <div className='flex justify-between py-4 border-b'>
                        <p>Total:</p>
                        <p>$3240</p>
                    </div>
                    <div className='flex justify-between py-4 border-b'>
                        <p>Shipping:</p>
                        <p className='text-left'>Free</p>
                    </div>
                    <div className='flex justify-between py-4 border-b'>
                        <p>Total:</p>
                        <p>$3240</p>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        <input className='border-white accent-[#FF8933]' type="radio" name="card" id="card" />
                        <label htmlFor="card">Cash on Delivery</label>
                    </div>
                    <div className='flex flex-col mt-8'>
                        <div className='flex flex-col md:flex-row items-start gap-4 md:gap-0'>
                            <input type="text" className='border py-[12px] px-12 rounded w-full text-center' placeholder='Coupon Code' />
                            <motion.button variants={buttonVariants} whileHover="hover" className='md:ml-2 bg-[#FF8933] text-white py-[12px] px-12 rounded w-full'>Apply Coupon</motion.button>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <motion.button disabled={!formFilled} onClick={handlePlaceOrder} variants={buttonVariants} whileHover="hover" className={`w-full md:ml-2 bg-[#FF8933] text-white py-[12px] px-6 rounded ${formFilled ? '' : 'opacity-50 cursor-not-allowed'}`}>Place Order</motion.button>
                    </div>
                </div>
            </div>
            {showFormPopup && (
                <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded">
                    Please complete all required fields.
                </div>
            )}
            {showCartPopup && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
                    Order received successfully!
                </div>
            )}
        </div>
    )
}

export default CheckoutComponent;
