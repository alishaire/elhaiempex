import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  var [mobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (mobileNavOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [mobileNavOpen]);

  return (
    <div className={router.pathname === "/" ? "navbar home" : "navbar"}>
      <nav>
        <div className="logo">
          <img src="/assets/logos/white.png"  alt="Elahi Empex" />
        </div>
        <section
          className={mobileNavOpen ? "mobilenav" : ""}
          onClick={() => setMobileNavOpen(false)}
        >
          <ul className={mobileNavOpen ? "active" : ""}>
            <li>
              <Link href="/">
                <img  src="/assets/logos/white.png" alt="" />
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>

            <li>
              <Link href="/manfacturing">Manfacturing</Link>
            </li>

            <li>
              <Link href="/solar">Featured</Link>
              {/* <ul className="dropdown">
              <li>
                <Link href="/our-brand"></Link>
              </li>

              <li>
                <Link href="/our-brands">Our Brand</Link>
              </li>
         
            </ul> */}
            </li>
          </ul>
        </section>

        <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="bars">
          <i className={`bx bx-${mobileNavOpen ? "x" : "menu"}`}></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
