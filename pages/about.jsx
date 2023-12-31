import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import CountUp from "react-countup";
import Image from "next/image";

export const PhotoService = {
  getData() {
    return [
      {
        itemImageSrc: "/About/Beachtowel.jpg",
        thumbnailImageSrc: "./About/Beachtowel.jpg",
        alt: "Description for Image 1",
        title: "Title 1",
      },
      {
        itemImageSrc: "/About/bedroom.jpg",
        thumbnailImageSrc: "./About/Beachtowel.jpg",
        alt: "Description for Image 2",
        title: "Title 2",
      },
      {
        itemImageSrc: "/About/Coutch.jpg",
        thumbnailImageSrc: "./About/HomeTextile.jpg",
        alt: "Description for Image 3",
        title: "Title 3",
      },
      {
        itemImageSrc: "/About/HomeTextile.jpg",
        thumbnailImageSrc: "./About/Beachtowel.jpg",
        alt: "Description for Image 4",
        title: "Title 4",
      },
      {
        itemImageSrc: "/About/hotelWindow.jpg",
        thumbnailImageSrc: "./About/Beachtowel.jpg",
        alt: "Description for Image 5",
        title: "Title 5",
      },
      {
        itemImageSrc: "/About/Kitchen.jpg",
        thumbnailImageSrc: "./About/Beachtowel.jpg",
        alt: "Description for Image 6",
        title: "Title 6",
      },
      {
        itemImageSrc: "/About/whitebedding.jpg",
        thumbnailImageSrc: "./About/Beachtowel.jpg",
        alt: "Description for Image 7",
        title: "Title 7",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
const About = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <Image height={600} width={900} 
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

  return (
    <>
      <div className="about maxpad">
        <div className="aboutmain">
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
          <div className="aboutcontent" id="items">
            <span className="scrollMark" onClick={handlescroll}>
              <i className="bx bx-down-arrow-alt"></i>
            </span>
            <h1>About</h1>
            <p>
              Welcome to Elahi Impex, where innovation, luxury, and
              sustainability converge to redefine your home textile experience.
              As one of Pakistan&apos;s fastest-growing providers of home
              textiles, we take pride in our roots in the City of Textile,
              Faisalabad. Our journey began with a weaving unit and has evolved
              into a comprehensive range of home-made ups, featuring a rich
              tapestry of textures, colors, and patterns.
            </p>
            <h2>Exquisite Bed and Bath Linen:</h2>
            <p>
              Embark on a sensory journey as you explore our exquisite bed and
              bath linen collection. Immerse yourself in the opulence of our
              meticulously crafted products, designed to transform your bedroom
              and bathroom into sanctuaries of relaxation. Our commitment to
              using the finest materials ensures durability, breathability, and
              a touch of luxury that goes beyond the ordinary.
            </p>
            <h2>A Haven of Comfort:</h2>
            <p>
              At Elahi Impex, we believe in creating a haven of comfort in your
              home. Indulge in the elegance of our bed sheets, fitted sheets,
              and towels—an embodiment of sophistication that elevates your
              living spaces. Each product is a testament to our dedication to
              quality, ensuring a touch of opulence in every detail.
            </p>
            <h2>Specialization in White Bedding for Hotels and Hospitals: </h2>
            <p>
              We specialize in providing premium-quality, luxury white bedding
              for hotels and hospitals. Our products not only embody elegance
              but also prioritize sustainability and eco-friendliness. Discover
              a world where every thread is woven with precision and care,
              offering the perfect blend of style and comfort.
            </p>
            <h2>Quality Meets Style:</h2>
            <p>
              Elahi Impex is synonymous with a world where quality meets style.
              Our products are designed with an artistic touch, reflecting a
              commitment to innovation and contemporary design. Whether you are
              looking for bedding that exudes sophistication or towels that
              cocoon you in comfort, we have it all.
            </p>
            <div className="productsdiv">
              <div className="items">
                <i className="fa-solid fa-vest-patches"></i>
                <span>Lab Coat</span>
              </div>
              <div className="items">
                <i className="fa-solid fa-mitten"></i>
                <span>Kitchen Linen</span>
              </div>
              <div className="items">
                <i className="fas fa-tools"></i>
                <span>Utility Bedding </span>
              </div>
              <div className="items">
                <i className="fa-solid fa-bath"></i>
                <span>Bath Accessories</span>
              </div>
              <div className="items">
                <i className="bx bxs-hard-hat"></i>
                <span>Window Treatments</span>
              </div>
              <div className="items">
                <i className="fa-solid fa-toilet-paper"></i>
                <span>Bath & beach Towels</span>
              </div>
            </div>

            <div className="counterDiv">
              <div className="counterItems">
                <h4>Power looms</h4>
                <CountUp start={0} end={100} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <span>+</span>
                    </div>
                  )}
                </CountUp>
              </div>

              <div className="counterItems">
                <h4>Stitching machine</h4>

                <CountUp start={0} end={125} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <span>+</span>
                    </div>
                  )}
                </CountUp>
              </div>
              <div className="counterItems">
                <h4>Shuttless looms</h4>
                <CountUp start={0} end={300} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <span>+</span>
                    </div>
                  )}
                </CountUp>
              </div>
              <div className="counterItems">
                <h4>Power</h4>
                <CountUp start={0} end={70} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <span>%</span>
                    </div>
                  )}
                </CountUp>
              </div>
              <div className="counterItems">
                <h4>Auto Looms</h4>
                <CountUp start={0} end={80} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <span>+</span>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
