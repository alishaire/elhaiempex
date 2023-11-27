import React, { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';


const contact = () => {
  const [openmodel, setOpenmodel] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4hzwrg6', 'template_xea43tt', form.current, 'CYeyoykc_ssRA-91-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  useEffect(() => {
    if (openmodel) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [openmodel]);

  return (
    <>
      <div className="contact maxpad">
        <div className="maincontact">
          <div className="contactimg"></div>
          <div className="contact-content">
            <h1>Contact Us</h1>
            <p>
              Pem-America is an established Home Textile Leader due to our
              ongoing dedication to: <br />
              Providing quality products at key price points. In order to do so,
              all Pem-America teams work hand in hand to ensure that their
              licensors and retailers are provided the best in class care and
              service.
            </p>
            <br />
            <h2>Corporate Office</h2>
            <p>PEM America, Inc.</p>
            <p>70 W. 36th Street 2nd Fl., New York, NY 10018</p>
            <a href="tel: (212) 481-2141">Tel: (212) 481-2141</a> <br />
            <a href="mailto:customerservice@pemamerica.com">
              customerservice@pemamerica.com
            </a>
            <br />
            <h2>Sales Office</h2>
            <p>PEM America, Inc.</p>
            <p>8346 Sterling Street, Irving, TX 75063</p>
            <a href="tel: (212) 481-2141">Tel: (212) 481-2141</a> <br />
            <button onClick={() => setOpenmodel(!openmodel)}>
              Contact Us <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>


      <div className= {openmodel ? "contactmodel open" : "contactmodel" }>
        <div className="contactopenmodel">
          <div className="contact-cross">
            <i
              onClick={() => setOpenmodel(false)}
              className="fa-solid fa-xmark"
            ></i>
          </div>
          <div className="contactform">
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="naming-div">
                <div>
                  <label htmlFor=""> First Name</label>
                  <input type="text" name="fname" placeholder="Enter Your First Name" />
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="lname" placeholder="Enter Your Last Name" />
                </div>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div>
                <label htmlFor="">Company Name</label>
                <input type="number" name="phone" placeholder="Enter Your Company Name" />
              </div>
              <div>
                <label htmlFor="">Product Name</label>
                <input type="text" name="productName" placeholder="Enter Your Product Name" />
              </div>
              <div>
                <label htmlFor="">Product Number</label>
                <input type="text" name="productNumber" placeholder="Enter Your Product Number" />
              </div>
              <div>
                <label htmlFor="">Comment Or Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  
                  placeholder="Enter Your Comment"
                ></textarea>
              </div>
              <div>
                <button>
                  {" "}
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
