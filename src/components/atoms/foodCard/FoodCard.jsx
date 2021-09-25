import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/shoppingSlice";

export default function FoodCard({food: {id, name, qualification, time, price, image}}) {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(addToCart({id, price}));
    }

    return  <div onClick={onClick} className="cursor-pointer rounded-2xl transition-all hover:shadow-xl">
                <div style={{backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover"}} className="overflow-hidden relative w-full h-56 rounded-2xl">
                    <div className="absolute bottom-0 left-0 bg-gray-200 p-3 rounded-tr-2xl">{time}</div>
                </div>
                <div className="py-4 px-2">
                    <h3 className="font-medium text-xl">{name}</h3>
                    <div className="flex items-center my-3">
                        <span className="mx-3 flex items-center"><svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.074 2.633c.32-.844 1.531-.844 1.852 0l2.07 5.734c.145.38.514.633.926.633h5.087c.94 0 1.35 1.17.611 1.743L18 14a.968.968 0 0 0-.322 1.092L19 20.695c.322.9-.72 1.673-1.508 1.119l-4.917-3.12a1 1 0 0 0-1.15 0l-4.917 3.12c-.787.554-1.83-.22-1.508-1.119l1.322-5.603A.968.968 0 0 0 6 14l-3.62-3.257C1.64 10.17 2.052 9 2.99 9h5.087a.989.989 0 0 0 .926-.633l2.07-5.734z"/></svg> {qualification}</span>
                        <span className="mx-3 text-gray-400">Deli Bagels $$</span>
                    </div>
                </div>
            </div>
}