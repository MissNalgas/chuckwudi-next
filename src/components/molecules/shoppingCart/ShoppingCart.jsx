import { useSelector } from "react-redux";
import { shoppingSelector } from "../../../redux/shoppingSlice";
import CartItem from "../../atoms/cartItem/CartItem";

export default function ShoppingCart() {

    const shopping = useSelector(shoppingSelector);

    return  <div className="max-h-72 overflow-y-auto">
                {shopping.map((item) => (
                    <CartItem key={item.id} id={item.id} quantity={item.quantity}/>
                ))}
            </div>
}