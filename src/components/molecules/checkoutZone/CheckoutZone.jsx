import NumberSelector from "../../atoms/numberSelector/NumberSelector";
import CheckoutButton from "../../atoms/checkoutButton/CheckoutButton";

import { selectTotal } from "../../../redux/shoppingSlice";
import { useSelector } from "react-redux";

export default function CheckoutZone() {

    const total = useSelector(selectTotal);

    return  <div className="pl-9">
                <div className="flex justify-between items-end py-7">
                    <h3 className="font-semibold text-lg">Total:</h3>
                    <h2 className="font-bold text-3xl mx-5">${total}</h2>
                </div>
                <hr/>
                <div className="flex justify-between items-center py-9">
                    <div>
                        <p>Persons</p>
                        <NumberSelector/>
                    </div>
                    <CheckoutButton/>
                </div>
            </div>
}