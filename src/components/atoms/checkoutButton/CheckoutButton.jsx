import ArrowImage from "../../../../public/109617.svg";
import Image from "next/image";

export default function CheckoutButton() {
    return  <button className="bg-yellow-400 p-4 rounded-tl-2xl rounded-bl-2xl flex items-center justify-evenly hover:bg-yellow-500 transition-all">
                <b className="m-3">Checkout</b>
                <Image width="23" src={ArrowImage} alt="arrow to the right"/>
            </button>
}