import Image from "next/image";

const Hero = () => {
    return (
        <div className="max-w-screen-2xl 2xl:mx-auto">
            <div className="flex flex-col md:flex-row mt-20 md:mt-0 justify-between">
                <div className="flex flex-col items-center justify-center pl-0 md:pl-10">
                    <h2 className="font-bold text-4xl  text-center">Elevate Your Space Today</h2>
                    <Image src="/oval-top.svg" alt="icon" width={300} height={28} />
                </div>
                <div className="mt-10 md:mt-0">
                    <Image src="/hero-img.png" alt="hero" width={800} height={400} />
                </div>
            </div>
            <div className="flex gap-3 md:gap-6 p-4 md:pl-10 mt-20 mb-20">
                <div className="bg-[#FF8933] rounded w-4 md:w-8 h-[85px] md:h-[100px]"></div>
                <div>
                    <h2 className="text-2xl md:text-4xl font-semibold md:font-bold mb-2">Flash Sales</h2>
                    <div className="flex gap-3 md:gap-6">
                        <div className="flex flex-col">
                            <p className="text-[10px] md:text-xs">Days</p>
                            <p className="text-center text-xl md:text-3xl font-bold">03</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-[10px] md:text-xs">Hours</p>
                            <p className="text-center text-xl md:text-3xl font-bold">23</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-[10px] md:text-xs">Minutes</p>
                            <p className="text-center text-xl md:text-3xl font-bold">19</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-[10px] md:text-xs">Seconds</p>
                            <p className="text-center text-xl md:text-3xl font-bold">56</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero