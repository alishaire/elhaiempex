import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/OurBrands.css";
import "@/styles/products.css";
import "@/styles/solar.css";

import "@/styles/About.css";
import "@/styles/Manfacturing.css";

import "@/styles/Contact.css";
import "@/styles/Team.css";

import "@/styles/Home.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PrimeReactProvider>
        <Navbar />
        <Component {...pageProps} />
      </PrimeReactProvider>
    </>
  );
}
