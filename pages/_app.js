import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/OurBrands.css";
import "@/styles/products.css";

import '@/styles/About.css'
import '@/styles/Contact.css'

import "@/styles/Home.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
