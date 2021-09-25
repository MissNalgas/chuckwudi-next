import {selectCount} from "../../../redux/shoppingSlice";
import { useSelector } from "react-redux";
import styles from "./MiniCart.module.css";

export default function MiniCart() {

    const count = useSelector(selectCount);

    return  <a href="#checkout" className={count === 0 ? "hidden" : `fixed right-10 bottom-10 bg-yellow-400 p-2 rounded-full flex ${styles.miniCart}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7z"/><path d="M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2"/><path d="M8 21h2"/><path d="M16 21h2"/></svg>
                <span>{count}</span>
            </a>
}