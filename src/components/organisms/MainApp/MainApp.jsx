import Topbar from "../../molecules/topbar/Topbar";
import Banner from "../../atoms/banner/Banner";
import Categories from "../../molecules/categories/Categories";
import Foods from "../../molecules/foods/Foods";
import MiniCart from "../../atoms/miniCart/MiniCart";

export default function MainApp() {
    return  <div className="flex-1 xl:max-h-screen xl:overflow-y-auto">
                <Topbar/>
                <Banner/>
                <Categories/>
                <Foods/>
                <MiniCart/>
            </div>
}