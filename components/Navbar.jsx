import Link from 'next/link'
import {useState} from 'react'

const Navbar = () => {

  var [mobileNavOpen,setMobileNavOpen] = useState(false)

  return (
        <div className="navbar">
            <nav>
                <div className='logo'>
                  <img src="/images/logo.png" alt="Elahi Empex" />
                </div>


                <ul className={mobileNavOpen ? "active" : ""}>
                  <li>
                    <Link href='/'>
                      <img src="/images/logo.png" alt="" />
                    </Link></li>
                  <li><Link href='/'>Home</Link></li>
                  <li><Link href='/about'>About</Link></li>
                  <li><Link href='/contact'>Contact</Link></li>
                  <li><Link href='/products'>Products</Link></li>
                  <li><Link href='#'>Brands</Link>
                  <ul className='dropdown'>
                  <li><Link href='/our-brand'></Link></li>

                  <li><Link href='/our-brand'>Our Brand</Link></li>
                  <li><Link href='/licensed-brands'>Licensed Brands</Link></li>
                  <li><Link href='/store-brands'>Store Brands</Link></li>
                  </ul>
                  </li>

                </ul>

                <div onClick={()=>setMobileNavOpen(!mobileNavOpen)} className="bars">
                  <i className={`bx bx-${mobileNavOpen ? "x":"menu"}`}></i>
                </div>

            </nav>
        </div>
  )
}

export default Navbar