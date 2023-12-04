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
              Elahi Impex corporate office is in Faisalabad the City of Textile,
              is now one of Pakistan’s fastest growing Home Textile providers.
              We company began with the weaving unit and has since expanded to
              home made ups. We Explore a world of textures, colors, and
              patterns as you browse through our exquisite bed and bath linen.
              Our commitment to using the finest materials ensures durability,
              breathability, and a touch of opulence that transforms your
              bedroom and bathroom into a sanctuary of relaxation. Immerse
              yourself in the luxury, where every product is a testament to our
              dedication to creating a haven of comfort in your home. Indulge in
              the elegance of our bed sheets, fitted sheets, and towels – an
              embodiment of sophistication and comfort that transcends the
              ordinary.
              <br /><br />
               Welcome to a world where quality meets style, and
              relaxation is an art form. Welcome to Elahi Impex where we
              redefine the way you experience the comfort of home. We are
              specialized in White bedding for Hotel and Hospitals with the
              premium quality and luxury hand feel. That has all the elements of
              sustainability innovation and eco friendly as well.
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
                <h4>Shuttless looms</h4>
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
                <h4>Stitching machine</h4>

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
