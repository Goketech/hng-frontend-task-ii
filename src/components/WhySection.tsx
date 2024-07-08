import Image from "next/image";

const WhySection = () => {
    return (
        <div className="mt-[233px] flex px-20 pb-10 border-b mb-10 justify-between ">
            <div className="flex flex-col items-center text-left">
                <div className="icon-container bg-[#5B3702] rounded-full flex items-center justify-center p-2"><Image src="/icon-delivery.svg" alt="delivery-icon" width={40} height={40} /></div>
                <h5 className="font-semibold text-2xl mt-6 mb-2">FREE AND FAST DELIVERY</h5>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center text-left">
                <div className="icon-container bg-[#5B3702] rounded-full flex items-center justify-center p-2"><Image src="/Icon-Customer-service.svg" alt="customer-service-icon" width={40} height={40} /></div>
                <h5 className="font-semibold text-2xl mt-6 mb-2">24/7 CUSTOMER SERVICE</h5>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center text-left">
                <div className="icon-container bg-[#5B3702] rounded-full flex items-center justify-center p-2"><Image src="/shield-tick.svg" alt="shield-icon" width={40} height={40} /></div>
                <h5 className="font-semibold text-2xl mt-6 mb-2">MONEY BACK GUARANTEE</h5>
                <p>We&apos;ll return money within 30 days</p>
            </div>
        </div>
    )
}

export default WhySection