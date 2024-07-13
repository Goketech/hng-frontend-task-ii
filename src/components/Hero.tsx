"use client"

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Hero = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const countdownRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const futureDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

        const calculateCountdown = () => {
            const currentDate = new Date().getTime();
            const difference = futureDate - currentDate;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            } else {
                clearInterval(countdownRef.current!);
            }
        };

        calculateCountdown();

        countdownRef.current = setInterval(calculateCountdown, 1000);

        return () => {
            clearInterval(countdownRef.current!);
        };
    }, []);

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time.toString();
    };

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
                            <p className="text-center text-xl md:text-3xl font-bold">{formatTime(countdown.days)}</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-[10px] md:text-xs">Hours</p>
                            <p className="text-center text-xl md:text-3xl font-bold">{formatTime(countdown.hours)}</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-[10px] md:text-xs">Minutes</p>
                            <p className="text-center text-xl md:text-3xl font-bold">{formatTime(countdown.minutes)}</p>
                        </div>
                        <span>:</span>
                        <div className="flex flex-col">
                            <p className="text-[10px] md:text-xs">Seconds</p>
                            <p className="text-center text-xl md:text-3xl font-bold">{formatTime(countdown.seconds)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero