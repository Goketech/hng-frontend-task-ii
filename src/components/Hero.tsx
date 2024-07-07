import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col items-center justify-center pl-10">
                    <h2 className="font-bold text-4xl max-w-80">Transform Your Space Today</h2>
                    <Image src="/oval-top.svg" alt="icon" width={300} height={28} />
                </div>
                <div>
                    <Image src="/hero-img.png" alt="hero" width={800} height={400} />
                </div>
            </div>
            <div className="flex gap-6 pl-10 mt-20 mb-20">
                <div className="bg-[#FF8933] rounded w-8 h-[100px]"></div>
                <div>
                    <h2 className="text-4xl font-bold mb-2">Flash Sales</h2>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <p className="text-xs">Days</p>
                            <p className="text-center text-3xl font-bold">03</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-xs">Hours</p>
                            <p className="text-center text-3xl font-bold">23</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-xs">Minutes</p>
                            <p className="text-center text-3xl font-bold">19</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-xs">Seconds</p>
                            <p className="text-center text-3xl font-bold">56</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero