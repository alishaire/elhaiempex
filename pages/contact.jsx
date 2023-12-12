import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Galleria } from 'primereact/galleria';

export const PhotoService = {
  getData() {
      return [
          {
              itemImageSrc: './Contact/contact1.jpg',
              thumbnailImageSrc: './Contact/contact1.jpg',
              alt: 'Description for Image 1',
              title: 'Title 1'
          },
          {
              itemImageSrc:  './Contact/modren.jpg',
              thumbnailImageSrc: './Contact/modren.jpg',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
         
        
      ];
  },

  getImages() {
      return Promise.resolve(this.getData());
  }
};
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
  const [images, setImages] = useState(null);

  useEffect(() => {
          PhotoService.getImages().then(data => setImages(data));
  }, []);

  const itemTemplate = (item) => {
      return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height:"100vh",objectFit:"cover" }} />;
  }

  const thumbnailTemplate = (item) => {
      return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
  }



  return (
    <>
      <div className="contact maxpad">
        <div className="maincontact">
        <div className="card" style={{minHeight:"100vh"}} > 
            <Galleria value={images} numVisible={5} circular 
                showThumbnails={false} showItemNavigators  showItemNavigatorsOnHover item={itemTemplate} />


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0148750966296!2d73.03574457602451!3d31.496274948331326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392241c98d5ab473%3A0xab4c7bb4a58f66b0!2sElahi%20Impex!5e0!3m2!1sen!2s!4v1702292982093!5m2!1sen!2s"  style={{border:0, width:"100%",height:"25%", marginTop:"10px"}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        </div>
          <div className="contact-content" >
            <span className="scrollMark" onClick={handlescroll}><i className='bx bx-down-arrow-alt'></i></span>
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
                <i className="bx bx-envelope"></i>
            
                <a href={"mailto:export@elahiimpex.com"}>export@elahiimpex.com</a>
              </div>
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel:+92-41-262-8676">+92-41-262-8676</a>
                
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
              <i className="bx bx-phone"></i>
               
                <a href="tel:+92-304-677 2060">+92-304-677 2060</a>
              </div>
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel:+92-300-797 8676">+92-300-797 8676</a>
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
                <i className="bx bx-envelope"></i>
                <a href={"mailto:elahiimpex@elahiimpex.com"}>elahiimpex@elahiimpex.com</a>
              </div>
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel:+92-313-766 6799">+92-313-766 6799</a>
              </div>
            </div>

            <div className="corpOffice">
              <h2>Wholesale Enquiries</h2>
              <p>
                If you are a retailer or wholesaler interested in our products,
                please reach out to our wholesale team:
              </p>
              {/* <div className="social-email">
                <i className="bx bx-envelope"></i>
                <a href={"mailto:export@elahiimpex.com"}>export@elahiimpex.com</a>
              </div> */}
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel:+92-300-866 0854">+92-300-866 0854</a>
              </div>
            </div>

            <div className="corpOffice">
              <h2>Get In Touch</h2>
              <p>
                If you are a retailer or wholesaler interested in our products,
                please reach out to our wholesale team:
              </p>

              <div className="socialhandles">
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
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
                    <i className="bx bx-user-pin"></i>
                  </div>
                  <div className="formParent">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Enter Your Last Name"
                    />
                    <i className="bx bx-user-pin"></i>
                  </div>
                </div>
                <div className="formParent">
                  {/* <label htmlFor="">Email</label> */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <i className="bx bx-user-pin"></i>
                </div>
                <div className="formParent">
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter Your Company Name"
                  />
                  <i className="bx bx-building-house"></i>
                </div>
                <div className="formParent">
                  <input
                    type="text"
                    name="productName"
                    placeholder="Enter Your Product Name"
                  />
                  <i className="bx bx-cart-download"></i>
                </div>
                <div className="formParent">
                  <input
                    type="text"
                    name="productNumber"
                    placeholder="Enter Your Product Number"
                  />
                  <i className="bx bx-phone"></i>
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
