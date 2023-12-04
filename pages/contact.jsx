import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [openmodel, setOpenmodel] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hzwrg6",
        "template_xea43tt",
        form.current,
        "CYeyoykc_ssRA-91-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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

      <div className={openmodel ? "contactmodel open" : "contactmodel"}>
        <div
          className={openmodel ? "contactopenmodel open" : "contactopenmodel"}
        >
          <div className="outerDiv">
            <div className="contact-cross">
              <i
                onClick={() => setOpenmodel(false)}
                className="fa-solid fa-xmark"
              ></i>

              <span>Get In Touch!!</span>
            </div>
            <div className="contactform">
              <form action="" ref={form} onSubmit={sendEmail}>
                <div className="naming-div">
                  <div className="formParent">
                    <input
                      type="text"
                      name="fname"
                      placeholder="Enter Your First Name"
                    />
                    <i class="bx bx-user-pin"></i>
                  </div>
                  <div className="formParent">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Enter Your Last Name"
                    />
                    <i class="bx bx-user-pin"></i>
                  </div>
                </div>
                <div className="formParent">
                  {/* <label htmlFor="">Email</label> */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <i class="bx bx-user-pin"></i>
                </div>
                <div className="formParent">
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter Your Company Name"
                  />
                  <i class="bx bx-building-house"></i>
                </div>
                <div className="formParent">
                  <input
                    type="text"
                    name="productName"
                    placeholder="Enter Your Product Name"
                  />
                  <i class="bx bx-cart-download"></i>
                </div>
                <div className="formParent">
                  <input
                    type="text"
                    name="productNumber"
                    placeholder="Enter Your Product Number"
                  />
                  <i class="bx bx-phone"></i>
                </div>
                <div>
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
      </div>
    </>
  );
};

export default Contact;
