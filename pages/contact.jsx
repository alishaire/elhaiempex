import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

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



  const [shoudlScroll, setShouldScroll] = useState(false)

  const handlescroll = () =>{
   setShouldScroll(true)
  }
 
  useEffect(() => {
    if(shoudlScroll){
      window.scrollTo(0,809)
      setShouldScroll(false)
    }
   
  }, [handlescroll])
  



  return (
    <>
      <div className="contact maxpad">
        <div className="maincontact">
          <div className="contactimg"></div>

          <div className="contact-content" >
            <span className="scrollMark" onClick={handlescroll}><i class='bx bx-down-arrow-alt'></i></span>
            <div className="pageHeaderSec">
              <h1>Contact Us</h1>
              <p>
                Thank you for considering Elahi Impex for your home textile
                needs. Have questions or want to connect with us? Reach out to
                our dedicated teams for customer support, business inquiries,
                careers, and wholesale partnerships. <br /> We value your
                feedback and strive to provide an unparalleled experience.
                Elevate your living spaces with Elahi Impex, where every product
                tells a story of comfort, luxury, and timeless style. Welcome to
                a world of refined living.
              </p>
            </div>

            <div className="corpOffice">
              <h2>Customer Support:</h2>
              <p>
                For any assistance regarding our products or services, our
                dedicated customer support team is here to help. Reach out to us
                via email or phone:
              </p>
              <div className="social-email">
                <i class="bx bx-envelope"></i>
                <Link href={"/"}>customersupport@elahiimpex.com</Link>
              </div>
              <div className="social-phone">
                <i class="bx bx-phone"></i>
                <span>+92-XXXX-XXXXXX</span>
              </div>
            </div>

            <div className="corpOffice">
              <h2>Business Inquiries:</h2>
              <p>
                If you are interested in collaborating with Elahi Impex or have
                business-related questions, please contact our business
                development team:
              </p>
              <div className="social-email">
                <i class="bx bx-envelope"></i>
                <Link href={"/"}>loremipsum@elahiimpex.com</Link>
              </div>
              <div className="social-phone">
                <i class="bx bx-phone"></i>
                <span>+92-XXXX-XXXXXX</span>
              </div>
            </div>

            <div className="corpOffice">
              <h2>Careers:</h2>
              <p>
                If you are interested in collaborating with Elahi Impex or have
                business-related questions, please contact our business
                development team:
              </p>
              <div className="social-email">
                <i class="bx bx-envelope"></i>
                <Link href={"/"}>careers@elahiimpex.com</Link>
              </div>
              <div className="social-phone">
                <i class="bx bx-phone"></i>
                <span>+92-XXXX-XXXXXX</span>
              </div>
            </div>

            <div className="corpOffice">
              <h2>Wholesale Enquiries</h2>
              <p>
                If you are a retailer or wholesaler interested in our products,
                please reach out to our wholesale team:
              </p>
              <div className="social-email">
                <i class="bx bx-envelope"></i>
                <Link href={"/"}>wholesale@elahiimpex.com</Link>
              </div>
              <div className="social-phone">
                <i class="bx bx-phone"></i>
                <span>+92-XXXX-XXXXXX</span>
              </div>
            </div>

            <div className="corpOffice">
              <h2>Get In Touch</h2>
              <p>
                If you are a retailer or wholesaler interested in our products,
                please reach out to our wholesale team:
              </p>

              <div className="socialhandles">
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>

            <button onClick={() => setOpenmodel(true)}>
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
