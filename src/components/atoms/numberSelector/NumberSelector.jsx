import { useDispatch, useSelector } from "react-redux";
import { addPerson, removePerson, selectPersons } from "../../../redux/shoppingSlice";


export default function NumberSelector() {

    const count = useSelector(selectPersons);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(addPerson());
    }

    const decrement = () => {
        dispatch(removePerson());
    }

    return  <div className="border rounded-lg grid grid-cols-3 gap-3 p-1 px-3">
                <button onClick={decrement} className="text-2xl">-</button>
                <span className="text-center text-xl">{count}</span>
                <button onClick={increment} className="text-2xl">+</button>
            </div>
}