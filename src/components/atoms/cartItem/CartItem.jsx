import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/shoppingSlice";

const initialState = {
    status: "loading",
    id: 0,
    name: '',
    qualification: 0,
    time: '',
    price: 0,
    image: ""
};

export default function CartItem({id, quantity}) {

    const [item, setItem] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`/api/item?id=${id}`).then((res) => {
            setItem(res.data.item);
        }).catch((err) => console.error(err));
    }, [id]);

    const onClick = () => {
        dispatch(removeFromCart({id, price: item.price}));
    }

    const price = () => {
        return item.price * quantity;
    }



    return  <div className="grid grid-cols-3 gap-4 w-full my-7">
                {item.status === "loading"
                ?
                    <span>loading</span>
                :
                <>  
                    <div className="flex items-center justify-center">
                        <div className="w-20 h-12 rounded" style={{backgroundImage: `url(${item.image})`, backgroundPosition: "center", backgroundSize: "cover"}}></div>
                    </div>
                    <span className="font-semibold text-center flex items-center justify-center">{quantity} x {item.name}</span>
                    <span className="flex items-center justify-center">
                        <span className="text-gray-400 text-center">${price()}</span>
                        <button className="m-2 flex items-center justify-center" onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth="2"><path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"/></svg></button>
                    </span>
                    
                </>
                }
            </div>
}