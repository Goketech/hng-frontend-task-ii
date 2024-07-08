import Image from 'next/image';

const CartComponent = () => {
    return (
        <div>
            <div className='pl-10 mt-20'>
                <p className='text-xl text-[#737373]'>Home / <span className='text-black'>Cart</span></p>
            </div>
            <div className='py-16 px-10'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='border-b'>
                            <th className='py-8 px-6 text-left'>Product</th>
                            <th className='py-8 px-6 text-left'>Price</th>
                            <th className='py-8 px-6 text-left'>Quantity</th>
                            <th className='py-8 px-6 text-left'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='py-8 px-6 flex items-center gap-4'>
                                <div className='relative'>
                                    <Image src="icon-cancel.svg" alt="cancel" width={20} height={20} className='cursor-pointer absolute left-[-10px]' />
                                    <Image src="/sofia-chair.png" alt="chair" width={54} height={54} />
                                </div>
                                <div>
                                    <p className='font-medium'>Sofia Chair</p>
                                </div>
                            </td>
                            <td className='py-8 px-6'>$1240</td>
                            <td className='py-8 px-6'>
                                <input type="number" className='w-16 p-2 border rounded' defaultValue={1} />
                            </td>
                            <td className='py-8 px-6'>$1240</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='py-8 px-6 flex items-center gap-4'>
                                <Image src="/sansa-chair.png" alt="chair" width={54} height={54} />
                                <div>
                                    <p className='font-medium'>Sansa Chair</p>
                                </div>
                            </td>
                            <td className='py-8 px-6'>$1000</td>
                            <td className='py-8 px-6'>
                                <input type="number" className='w-16 p-2 border rounded' defaultValue={2} />
                            </td>
                            <td className='py-8 px-6'>$2000</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex justify-between mt-6'>
                    <button className="bg-[white] text-[#FF8933] border-2 border-[#FF8933] font-medium rounded py-[12px] px-12">Return to Shop</button>
                    <button className="bg-[#FF8933] text-white text-base font-bold rounded py-[12px] px-12">Update Cart</button>
                </div>
                <div className='mt-20 flex justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex items-start'>
                            <input type="text" className='border py-[12px] px-12 rounded' placeholder='Coupon Code' />
                            <button className='ml-2 bg-[#FF8933] text-white py-[12px] px-12 rounded'>Apply Coupon</button>
                        </div>
                    </div>
                    <div className='border-2 px-6 py-8  mb-36'>
                        <h6 className='font-medium text-xl mb-2'>Cart Total</h6>
                        <div className='flex gap-72 py-4 border-b'>
                            <p>SubTotal:</p>
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
                        <div className='flex justify-center mt-4'>
                            <button className="bg-[#FF8933] text-white text-base font-bold rounded py-[12px] px-10">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;
