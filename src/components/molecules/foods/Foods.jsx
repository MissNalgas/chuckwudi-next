import FoodCard from "../../atoms/foodCard/FoodCard";

import { selectFilter } from "../../../redux/categorySlice";
import { useSelector } from "react-redux";


const testProducts = [
    {
        "id": 1,
        "name": "Filete de ternera con salsa",
        "qualification": 4.9,
        "time": "25-30min",
        "price": 14.99,
        "image": "/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "categories": ["all", "barbecue"]
    },
    {
        "id": 2,
        "name": "Desayuno de primer plano lácteos",
        "qualification": 4.7,
        "time": "20-25min",
        "price": 9.99,
        "image": "/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "categories": ["all"]
    },
    {
        "id": 3,
        "name": "Burrito de pollo",
        "qualification": 4.6,
        "time": "25-30min",
        "price": 13.99,
        "image": "/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "categories": ["all"]
    },
    {
        "id": 4,
        "name": "Plato de salmón",
        "qualification": 4.5,
        "time": "25-30min",
        "price": 15.99,
        "image": "/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "categories": ["all", "sushi", "asian"]
    },
    {
        "id": 5,
        "name": "Postre",
        "qualification": 4.8,
        "time": "15-20min",
        "price": 6.99,
        "image": "/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "categories": ["all", "dessert"]
    },
    {
        "id": 6,
        "name": "Sándwich servido en la tabla de cortar",
        "qualification": 4.7,
        "time": "10-15min",
        "price": 9.99,
        "image": "/pexels-photo-1600711.jpeg",
        "categories": ["all"]
    },
    {
        "id": 7,
        "name": "Plato de aguacate cocido",
        "qualification": 4.4,
        "time": "15-25min",
        "price": 12.99,
        "image": "/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "categories": ["all", "dessert"]
    },
    {
        "id": 8,
        "name": "Hamburguesa",
        "qualification": 4.6,
        "time": "10-15min",
        "price": 14.99,
        "image": "/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "categories": ["all", "burger"]
    }
]



export default function Foods() {

    const filter = useSelector(selectFilter);

    return  <div className="lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-20 px-3">
                {testProducts.filter((prod) => prod.categories.includes(filter)).map((prod) => (
                    <FoodCard key={prod.id} food={prod}/>
                ))}
                {testProducts.filter((prod) => prod.categories.includes(filter)).length === 0 &&
                    <span className="text-center col-span-3 text-gray-400 text-xl">Empty 👻</span>
                }
            </div>
}