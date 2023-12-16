import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Galleria } from "primereact/galleria";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
export const PhotoService = {
  getData() {
    return [
      {
        itemImageSrc: "/Contact/contact1.jpg",
        thumbnailImageSrc: "./Contact/contact1.jpg",
        alt: "Description for Image 1",
        title: "Title 1",
      },
      {
        itemImageSrc: "/Contact/modren.jpg",
        thumbnailImageSrc: "./Contact/modren.jpg",
        alt: "Description for Image 2",
        title: "Title 2",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
const Contact = () => {
  const [openmodel, setOpenmodel] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hdg2fbj",
        "template_bndm04a",
        form.current,
        "G3U-f97Mpz-FmM4L0"
      )
      .then(
        (result) => {
          toast.success("Data submited Successfully");
          setOpenmodel(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Something Went Wrong !");
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

  const [shoudlScroll, setShouldScroll] = useState(false);

  const handlescroll = () => {
    setShouldScroll(true);
  };

  useEffect(() => {
    const contentMain = document.getElementById("items");
    if (shoudlScroll) {
      contentMain.scrollTo(0, 809);
      setShouldScroll(false);
    }
  }, [handlescroll]);
  const [images, setImages] = useState(null);

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <Image
      width={900}
      height={900}
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="contact maxpad">
        <div className="maincontact">
          <div className="card" style={{ minHeight: "100vh" }}>
            <Galleria
              value={images}
              numVisible={5}
              circular
              showThumbnails={false}
              showItemNavigators
              showItemNavigatorsOnHover
              item={itemTemplate}
            />
          </div>
          <div className="contact-content" id="items">
            <span className="scrollMark" onClick={handlescroll}>
              <i className="bx bx-down-arrow-alt"></i>
            </span>
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

                <a href={"mailto:export@elahiimpex.com"}>
                  export@elahiimpex.com
                </a>
              </div>
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel: +923186187272">+923186187272</a>
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

                <a href="tel:+923007618550">+923007618550</a>
              </div>
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel:+923186187272">+923186187272</a>
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
                <a href={"mailto:elahiimpex@elahiimpex.com"}>
                  elahiimpex@elahiimpex.com
                </a>
              </div>
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel:+923186187272">+923186187272</a>
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
                <a href="tel:+923218660550">+923008660854</a>
              </div>
              <div className="social-phone">
                <i className="bx bx-phone"></i>
                <a href="tel:+923218660550">+923218660550</a>
              </div>
            </div>

            <div className="corpOffice">
              <h2>Office #1</h2>
              <p>
                <strong>Mill Address</strong> :Mill # 1: Rehman Abad, Factory
                Area, G.M. Abad Faisalabad, Pakistan
              </p>
            </div>
            <div className="corpOffice">
              <h2>Office #2</h2>
              <p>
                <strong>Mill Address #2</strong> :5-Giraiyn. besides Small
                Industrial Estate. Bypass Raod 5-km Toward Aminpur Bypass Office
                # 5, Ist Floor, Hussain Market, Near Al-Falah Bank, Yarn Market
                Faisalabad - Pakistan
              </p>
              <div className="socialhandles">
                <a href="">
                  {" "}
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="">
                  {" "}
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="">
                  {" "}
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="whatsapp://send?phone=+923186187272"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
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
                    name="message"
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
