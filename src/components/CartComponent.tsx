"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export interface Product {
    id: string;
    name: string;
    current_price: number;
    photos: any;
    quantity: number;
}

const CartComponent = () => {
    const { cart, clearCart, removeFromCart, updateCart } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach((product: Product) => {
            totalPrice += product.current_price * product.quantity;
        });
        setTotal(totalPrice);
    }, [cart]);

    const buttonVariants = {
        hover: { scale: 1.05 },
    };

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        productId: string
    ) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity >= 1 && newQuantity <= 20) {
            const updatedCart = cart.map((product: Product) =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            );
            updateCart(updatedCart);
        }
    };

    return (
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className='pl-2.5 md:pl-10 mt-20'>
                <p className='text-xl text-[#737373]'>Home / <span className='text-black'>Cart</span></p>
            </div>
            <div className='py-16 pl-2.5 md:px-10'>
                <table suppressHydrationWarning className='w-full border-collapse'>
                    <thead>
                        <tr className='border-b'>
                            <th className='md:py-8 md:px-6 py-6 px-4 text-left'>Product</th>
                            <th className='md:py-8 md:px-6 py-6 px-4 text-left'>Price</th>
                            <th className='md:py-8 md:px-6 py-6 px-4 text-left'>Quantity</th>
                            <th className='md:py-8 md:px-6 py-6 px-4 text-left'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((product: Product, index: number) => (
                                <tr key={index} className='border-b'>
                                    <td className='md:py-8 md:px-6 py-6 px-4 flex items-center gap-2 md:gap-4'>
                                        <div className='relative'>
                                            <Image onClick={() => handleRemoveFromCart(product.id)} src="icon-cancel.svg" alt="cancel" width={20} height={20} className='cursor-pointer absolute left-[-10px]' />
                                            <Image src={product.photos?.length > 0
                                                ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                                                : 'https://api.timbu.cloud/images/default_image.jpg'} alt="chair" width={54} height={54} />
                                        </div>
                                        <div>
                                            <p className='font-medium'>{product.name}</p>
                                        </div>
                                    </td>
                                    <td className='md:py-8 md:px-6 py-6 px-4'>${product.current_price}</td>
                                    <td className='md:py-8 md:px-6 py-6 px-4'>
                                        <input type="number" className='w-16 p-2 border rounded' value={product.quantity}
                                            min={1}
                                            max={20}
                                            onChange={(e) => handleQuantityChange(e, product.id)} />
                                    </td>
                                    <td className='md:py-8 md:px-6 py-6 px-4'>${product.current_price * product.quantity}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                <div className='flex justify-between mt-6'>
                    <Link href="/"><motion.button variants={buttonVariants} whileHover="hover" className="bg-[white] text-[#FF8933] border-2 border-[#FF8933] font-medium rounded py-[6px] md:py-[12px] px-6 md:px-12">Return to Shop</motion.button></Link>
                    <motion.button variants={buttonVariants} whileHover="hover" className="bg-[#FF8933] mr-2 md:mr-0 text-white text-base border-2 border-[#FF8933]  font-bold rounded py-[6px] md:py-[12px] px-6 md:px-12">Update Cart</motion.button>
                </div>
                <div className='mt-20 flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col mr-2 md:mr-0 md:flex-row items-start gap-4 md:gap-0'>
                            <input type="text" className='border py-[12px] px-12 rounded w-full text-center' placeholder='Coupon Code' />
                            <motion.button variants={buttonVariants} whileHover="hover" className='md:ml-2 bg-[#FF8933] text-white py-[12px] px-12 rounded w-full'>Apply Coupon</motion.button>
                        </div>
                    </div>
                    <div className='border-2 px-6 py-8 mt-10 md:mt-0  mb-36'>
                        <h6 className='font-medium text-xl mb-2'>Cart Total</h6>
                        <div className='flex justify-between md:gap-72 py-4 border-b'>
                            <p>SubTotal:</p>
                            <p>${total}</p>
                        </div>
                        <div className='flex justify-between py-4 border-b'>
                            <p>Shipping:</p>
                            <p className='text-left'>Free</p>
                        </div>
                        <div className='flex justify-between py-4 border-b'>
                            <p>Total:</p>
                            <p>${total}</p>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <Link href="/checkout"><motion.button variants={buttonVariants} whileHover="hover" className="bg-[#FF8933] text-white text-base font-bold rounded py-[12px] px-10">Proceed to Checkout</motion.button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;
