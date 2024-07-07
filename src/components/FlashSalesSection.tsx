import Card from "./Card";
import Image from "next/image";

const FlashSalesSection = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute top-[-50px] right-40 flex gap-2">
                    <Image className="bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-left.svg" alt="arrow" width={32} height={32} />
                    <Image className="bg-[#f5f5f5] rounded-full p-2" src="/icons_arrow-right.svg" alt="arrow" width={32} height={32} />
                </div>
                <div className="flex flex-shrink-0 mt-10 gap-6 pl-10 pr">
                    <Card discountPercentage="-35%" title="Kabir Chair" numberOfRatings={88} oldPrice={160} newPrice={120} productImage="/kabir-chair.png" />
                    <Card discountPercentage="-35%" title="Asara Chair" numberOfRatings={86} oldPrice={160} newPrice={110} productImage="/asara-chair.png" />
                    <Card discountPercentage="-35%" title="Chidi Chair" numberOfRatings={85} oldPrice={160} newPrice={120} productImage="/chidi-chair.png" />
                    <Card discountPercentage="-35%" title="Zadok Chair" numberOfRatings={85} oldPrice={180} newPrice={110} productImage="/zadok-chair.png" />
                    <Card discountPercentage="-35%" title="Lanre Chair" numberOfRatings={85} oldPrice={170} newPrice={110} productImage="/lanre-chair.png" />
                    <Card discountPercentage="-35%" title="Ezra Chair" numberOfRatings={85} oldPrice={160} newPrice={100} productImage="/ezra-chair.png" />
                </div>
            </div>
            <div className="m-10 pb-10 w-[85%] border-b mb-10">
                <button className="bg-[#FF8933] text-white text-lg font-semibold rounded py-4 px-12">View All Products</button>
            </div>
        </>
    )
}

export default FlashSalesSection