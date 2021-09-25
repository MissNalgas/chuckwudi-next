import "../styles/globals.css";
import {Provider} from "react-redux";
import {store} from "../src/redux/store";

import {app} from "../src/utils/firebase";
import {useEffect} from "react";



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log(app);
  })

  return  <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
