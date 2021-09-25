import MainApp from "../src/components/organisms/MainApp/MainApp";
import OrderApp from "../src/components/organisms/OrderApp/OrderApp";
import styles from "../styles/Home.module.css";

export default function Home() {
  return  <div className={styles.home}>
            <MainApp/>
            <OrderApp/>
          </div>
}
