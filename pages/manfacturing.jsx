import Link from "next/link";
import React from "react";

const manfacturing = () => {
  return (
    <>
      <div className="parent">
        <div className="manfacturing">
          <div className="man-grid-waving">
            <div className="manficbgimg waving"></div>
            <div className="manfccontent">
              <h2>Weaving</h2>
              <p>
                Elahi Impex, a vertically integrated weaving powerhouse,
                showcases a monthly weaving capacity of 1.2 million meters
                across various weaves, producing Grey, Bleached, Dyed, Printed
                Fabrics, and Made Ups. Our state-of-the-art weaving mills are
                equipped with modern computerized machines, including Shuttless
                300 looms, Auto 80 & Power 100. This diverse loom portfolio
                ensures precision and efficiency in our textile production.
                Renowned for our global exports, Elahi Impex combines
                traditional craftsmanship with cutting-edge technology,
                delivering textiles that embody excellence and innovation in
                every woven thread.
              </p>
              <div>
                <Link href="/contact">Add Inquery</Link>
              </div>
            </div>
          </div>
          <div className="man-grid-Dyeing">
            <div className="manfccontent">
              <h2>Dyeing</h2>
              <p>
                Elahi Impex is equipped with comprehensive dyeing facilities,
                featuring state-of-the-art machinery sourced from THEIS GERMANY,
                including Soft Flows (H.T) and Closed Winches, ensuring optimal
                quality in every aspect. Our meticulous bleaching process
                involves a series of precise steps to guarantee exact color
                matching and color-fast results. This process encompasses
                washing, dyeing, and drying, with tumble dryers from This,
                ensuring a seamless combination of continuous tumbling and
                drying. This meticulous approach not only enhances overall
                quality but also ensures better handling, a refined pile, and
                controlled shrinkage, setting new standards in textile dyeing.
              </p>
              <div>
                <Link href="/contact">Add Inquery</Link>
              </div>
            </div>
            <div className=" manficbgimg Dyeing"></div>
          </div>
          <div className="man-grid-Processing">
            <div className="manficbgimg Processing"></div>
            <div className="manfccontent">
              <h2>Processing</h2>
              <p>
                Elahi Impex boasts comprehensive arrangements for all modes of
                textile processing and printing, including both rotary and panel
                methods. We collaborate with high-quality standard processing
                units to ensure the excellence of our products. Throughout the
                entire production journey, from inception to completion, our
                dedicated team of specialized quality control personnel
                meticulously oversees every aspect, affirming that the quality
                of our goods meets the highest standards. At Elahi Impex, our
                commitment to quality is unwavering, ensuring that each product
                reflects our dedication to excellence in textile processing.
              </p>
              <div>
                <Link href="/contact">Add Inquery</Link>
              </div>
            </div>
          </div>
          <div className="man-grid-Stitching">
            <div className="manfccontent">
              <h2>Stitching</h2>
              <p>
                Elahi Impex prides itself on its advanced stitching
                capabilities, featuring the latest modern stitching machines
                operated by highly skilled labor to cater to contemporary
                stitching demands. Our machinery lineup encompasses Singer,
                Safety + Overlock, Double Needle, Kansai Special, and Flatlock
                machines, ensuring a seamless blend of traditional craftsmanship
                with cutting-edge technology. From intricate details to durable
                seams, our skilled team and state-of-the-art machines guarantee
                precision and quality in every stitch, reflecting our commitment
                to excellence in textile manufacturing.
              </p>
              <div>
                <Link href="/contact">Add Inquery</Link>
              </div>
            </div>
            <div className="manficbgimg Stitching"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default manfacturing;
