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
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <>
      <PrimeReactProvider>
        <Navbar />
        {pathname != "/contact" && pathname != "/about" && (
          <div className="AllPageWhatsApp">
            <Link
              href="whatsapp://send?phone=+923186187272"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
          </div>
        )}

        <Component {...pageProps} />
      </PrimeReactProvider>
    </>
  );
}
