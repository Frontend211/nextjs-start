import "../styles/style.css";

import Footer from "../components/Footer";
import Nav from "../components/Nav";


export default function MyApp({ Component, pageProps }) {
    return <>
        <Nav/>
        <hr/>
        <Component {...pageProps} />
        <hr/>
        <Footer/>
    </>   
  }