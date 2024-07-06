import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
    <div className="bg-[#5B3702] flex justify-center items-center text-white text-sm p-4 border border-black">
        <p className="mr-10">Summer Sale For All Dinning Set.  Free Express Delivery - OFF 50%!</p>
        <span className="font-bold underline cursor-pointer">ShopNow</span>
        <div className="absolute right-12 items-center cursor-pointer flex">
            <p>English</p>
            <Image
              className=""
              src="/DropDown.svg"
              alt="dropdown"
              width={24}
              height={24}
              priority
            />
        </div>
    </div>
    <div className="flex p-10 justify-between border-b">
        <div>
            <h1 className="font-bold text-2xl">Duexe</h1>
        </div>
        <div className="ml-8 flex gap-12">
            <Link href="/" className="underline decoration-[#FF8933]">Shop</Link>
            <Link href="/">New In</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Sales</Link>
        </div>
        <div className="flex gap-4 mr-6">
        <Image
              className=""
              src="/Wishlist.svg"
              alt="wishlist"
              width={32}
              height={32}
              priority
            />
            <Image
              className=""
              src="/cart-icon.svg"
              alt="cart"
              width={32}
              height={32}
              priority
            />
            <Image
              className=""
              src="/search-icon.svg"
              alt="search"
              width={32}
              height={32}
              priority
            />
        </div>
    </div>
    </>
  )
}

export default Nav