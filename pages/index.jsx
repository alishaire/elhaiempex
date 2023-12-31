import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <i
      id="slickBtnNext"
      style={{ ...style }}
      onClick={onClick}
      className="fa-solid fa-arrow-right-long"
    ></i>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <i
      id="slickBtnPrev"
      style={{ ...style }}
      onClick={onClick}
      className="fa-solid fa-arrow-left-long"
    ></i>
  );
}

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: true,
    prevArrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Head>
        <title>Elahi Impex Export quality</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="homeParent">
        <Slider {...settings} className="sliderParent">
          <div className="slide-1 slide">
            <div className="header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">
                    <h1>Bedding</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-02 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">
                    <h1>Bath Accessories</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-03 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">
                    <h1>Bath & beach Towels</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-04 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">

                    <h1>Bedding With Window</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-05 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">
                    <h1>Kitchen Linen</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-06 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">

                    <h1>Lab Coats</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-07 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">

                    <h1>Utility Bedding</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-08 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">
                    <h1>Window Treatments</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-09 slide">
            <div className=" header_below">
              <div className="slideContent">
                <div className="info">
                  <div className="headingdiv">
                    <h1>Hotel Slippers</h1>
                  </div>
                  <q>
                    The world around us is constantly changing and so must we…
                    Rising to these challenges together to achieve our goals.
                  </q>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </main>
    </>
  );
}
