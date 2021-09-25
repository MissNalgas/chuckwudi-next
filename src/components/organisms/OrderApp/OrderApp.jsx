import UserLogin from "../../molecules/userLogin/UserLogin";
import AddressEditor from "../../molecules/addressEditor/AddressEditor";
import ShoppingCart from "../../molecules/shoppingCart/ShoppingCart";
import CheckoutZone from "../../molecules/checkoutZone/CheckoutZone";

export default function OrderApp() {
    return  <div id="checkout" className="bg-gray-100 flex-none w-full xl:w-96 shadow-inner relative">
                <div className="p-9">
                    <UserLogin/>
                    <h2 className="font-bold text-3xl">My 😎 Order</h2>
                    <AddressEditor/>
                    <ShoppingCart/>
                </div>
                <CheckoutZone/>
            </div>
}