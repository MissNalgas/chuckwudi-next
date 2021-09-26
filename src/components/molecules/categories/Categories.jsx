import DropdownDelivery from "../../atoms/dropdownDelivery/DropdownDelivery";
import CategoryButton from "../../atoms/categoryButton/CategoryButton";


const categories = [
    {
        "id": 1,
        "name": "All",
        "icon": "https://image.flaticon.com/icons/svg/701/701965.svg",
        "filterName": "all"
    },
    {
        "id": 2,
        "name": "Pizza",
        "icon": "https://image.flaticon.com/icons/svg/599/599995.svg",
        "filterName": "pizza"
    },
    {
        "id": 3,
        "name": "Asian",
        "icon": "https://image.flaticon.com/icons/svg/1895/1895684.svg",
        "filterName": "asian"
    },
    {
        "id": 4,
        "name": "Burgers",
        "icon": "https://image.flaticon.com/icons/svg/883/883806.svg",
        "filterName": "burger"
    },
    {
        "id": 5,
        "name": "Barbecue",
        "icon": "https://image.flaticon.com/icons/svg/933/933310.svg",
        "filterName": "barbecue"
    },
    {
        "id": 6,
        "name": "Desserts",
        "icon": "https://image.flaticon.com/icons/svg/174/174394.svg",
        "filterName": "dessert"
    },
    {
        "id": 7,
        "name": "Thai",
        "icon": "https://image.flaticon.com/icons/svg/135/135367.svg",
        "filterName": "thai"
    },
    {
        "id": 8,
        "name": "Sushi",
        "icon": "https://image.flaticon.com/icons/svg/1900/1900683.svg",
        "filterName": "sushi"
    }
]

export default function Categories() {



    return  <div className="py-16">
                <div className="flex px-3">
                    <h2 className="flex-1 font-bold text-3xl">Restaurants 🍔</h2>
                    <DropdownDelivery/>
                </div>
                <div className="overflow-x-auto flex justify-center box-content">
                    <div className="whitespace-nowrap max-w-full">
                        {categories.map((cat) => (
                            <CategoryButton key={cat.name} filterName={cat.filterName} icon={cat.icon} name={cat.name}/>
                        ))}
                    </div>
                </div>
                
                
            </div>
}