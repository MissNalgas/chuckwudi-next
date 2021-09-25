import HeaderImg from "../../../../public/headerimage.png";
import Image from "next/image";


export default function Banner() {
    return  <div className="relative mx-5 md:mx-32">
                <div className="absolute bottom-0 rounded-3xl left-0 w-full bg-yellow-100 h-5/6">
                </div>
                <div className="flex items-center md:flex-row flex-col">
                    <Image src={HeaderImg} alt="header image"/>
                    <div className="m-9 z-10">
                        <h2 className="text-yellow-500 font-bold text-3xl">$0 delivery for 30 days! 🎉</h2>
                        <p className="text-gray-400">$0 delivery fee for orders over $10 for 30 days</p>
                    </div>
                </div>
                <a className="absolute right-10 bottom-6 text-yellow-500 font-bold md:block hidden">Learn more...</a>
                
            </div>
}