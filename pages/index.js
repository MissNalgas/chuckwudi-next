import MainApp from "../src/components/organisms/MainApp/MainApp";
import OrderApp from "../src/components/organisms/OrderApp/OrderApp";

export default function Home() {
  return  <div className="flex flex-row flex-col xl:flex-row">
            <MainApp/>
            <OrderApp/>
          </div>
}
