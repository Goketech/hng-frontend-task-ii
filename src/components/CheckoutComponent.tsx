import Image from 'next/image';

const CheckoutComponent = () => {
    return (
        <div>
            <div className='pl-10 mt-20'>
                <p className='text-xl text-[#737373]'>Home / Category / Product / View Cart / <span className='text-black'>Checkout</span></p>
            </div>
            <div className='flex p-20 justify-between mb-32'>
                <div>
                    <h2 className='text-4xl font-medium mb-12'>Billing Details</h2>
                    <div className='flex flex-col gap-8 text-[#999999]'>
                        <div className='flex flex-col'>
                            <label className='mb-2' htmlFor="firstName">First Name<span className='text-[#DF1C41]'>*</span></label>
                            <input className='bg-[#F5F5F5] py-3.5' type="text" name='firstName' id='firstName' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-2' htmlFor="lastName">Last Name</label>
                            <input className='bg-[#F5F5F5] py-3.5' type="text" name='lastName' id='lastName' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-2' htmlFor="streetAddress">Street Address<span className='text-[#DF1C41]'>*</span></label>
                            <input className='bg-[#F5F5F5] py-3.5' type="text" name='streetAddress' id='streetAddress' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-2' htmlFor="apartment">Apartment, floor, etc. (optional)</label>
                            <input className='bg-[#F5F5F5] py-3.5' type="text" name='apartment' id='apartment' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-2' htmlFor="city">Town/City<span className='text-[#DF1C41]'>*</span></label>
                            <input className='bg-[#F5F5F5] py-3.5' type="text" name='city' id='city' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-2' htmlFor="phoneNumber">Phone Number<span className='text-[#DF1C41]'>*</span></label>
                            <input className='bg-[#F5F5F5] py-3.5' type="text" name='phoneNumber' id='phoneNumber' required />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-2' htmlFor="email">Email Address<span className='text-[#DF1C41]'>*</span></label>
                            <input className='bg-[#F5F5F5] py-3.5'  type="text" name='email' id='email' required />
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="" id="" />
                            <p className='text-black'>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-2 px-4 flex items-center justify-between'>
                        <div className='py-4 pr-4 flex items-center gap-4'>
                            <div>
                                <Image src="/sofia-chair.png" alt="chair" width={54} height={54} />
                            </div>
                            <div>
                                <p className='font-medium'>Sofia Chair</p>
                            </div>
                        </div>
                        <div className='py-4'>$1240</div>
                    </div>
                    <div className='py-2 px-4 flex items-center justify-between'>
                        <div className='py-4 pr-4 flex items-center gap-4'>
                            <div>
                                <Image src="/sansa-chair.png" alt="chair" width={54} height={54} />
                            </div>
                            <div>
                                <p className='font-medium'>Sansa Chair</p>
                            </div>
                        </div>
                        <div className='py-4'>$1000</div>
                    </div>
                    <div>
                        <div className='flex justify-between py-4 border-b'>
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
                    </div>
                    <div className='flex justify-between items-center mt-8'>
                        <div className='flex gap-4'>
                            <input type="radio" name="card" id="card" />
                            <label htmlFor="card">Bank</label>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/Visa.svg" alt="card" width={54} height={54} />
                            <Image src="/Mastercard.svg" alt="card" width={54} height={54} />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        <input type="radio" name="card" id="card" />
                        <label htmlFor="card">Cash on Delivery</label>
                    </div>
                    <div className='flex flex-col mt-8'>
                        <div className='flex items-start'>
                            <input type="text" className='border py-[12px] px-10 rounded' placeholder='Coupon Code' />
                            <button className='ml-2 bg-[#FF8933] text-white py-[12px] px-8 rounded'>Apply Coupon</button>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className='ml-2 bg-[#FF8933] text-white py-[12px] px-6 rounded'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutComponent