import React from "react";

import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <div className="about maxpad">
        <div className="aboutmain">
          <div className="aboutimg"></div>
          <div className="aboutcontent">
            <h1>About</h1>
            <p>
              Welcome to Elahi Impex, where innovation, luxury, and
              sustainability converge to redefine your home textile experience.
              As one of Pakistan's fastest-growing providers of home textiles,
              we take pride in our roots in the City of Textile, Faisalabad. Our
              journey began with a weaving unit and has evolved into a
              comprehensive range of home-made ups, featuring a rich tapestry of
              textures, colors, and patterns.
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
            <h2>Quality Meets Style: </h2>
            <p>
              Elahi Impex is synonymous with a world where quality meets style.
              Our products are designed with an artistic touch, reflecting a
              commitment to innovation and contemporary design. Whether you are
              looking for bedding that exudes sophistication or towels that
              cocoon you in comfort, we have it all.
            </p>
            <div className="productsdiv">
              <div className="items">
                <i class="fa-solid fa-vest-patches"></i>
                <span>Lab Coat</span>
              </div>
              <div className="items">
                <i class="fa-solid fa-mitten"></i>
                <span>Kitchen Linen</span>
              </div>
              <div className="items">
                <i class="fas fa-tools"></i>
                <span>Utility Bedding </span>
              </div>
              <div className="items">
                <i class="fa-solid fa-bath"></i>
                <span>Bath Accessories</span>
              </div>
              <div className="items">
                <i class="bx bxs-hard-hat"></i>
                <span>Window Treatments</span>
              </div>
              <div className="items">
                <i class="fa-solid fa-toilet-paper"></i>
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
                <CountUp start={0} end={325} delay={0}>
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
