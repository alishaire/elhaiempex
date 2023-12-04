import Link from "next/link";
import React from "react";

const manfacturing = () => {
  return (
    <>
      <div className="manfacturing">
    
        <div className="man-grid-waving">
          <div className="manficbgimg waving"></div>
          <div className="manfccontent">
            <h2>Weaving</h2>
            <p>
              Elahi Impex is a vertically integrated unit having a weaving
              capacity of around 12 lacks meters per month (in different weave)
              . We are exporting Grey ,Bleached, Dyed, Printed Fabrics and Made
              Ups. Elahi Impex is equipped with modern computerize machines. The
              main plant and equipment installed in the weaving mills is as
              following Sulzer 130",80 Looms | Suttless 110" 40 Looms | suttless
              85" 80 Looms | Auto 112" 60" | Power 120" 100Looms.
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
              We have complete facilities for dyeing house including latest
              machinery from THEIS GERMANY for optimum quality such as Soft
              Flows (H.T) & Closed Winches. The bleaching process involves a
              series of steps to ensure exact color matching and a color fast
              process, including washing, dyeing and drying. For Drying we have
              tumble dryers from This which ensure continuous tumbling & drying.
              This process ensures improved quality, better handling, good pile
              and controls shrinkage.
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
              Elahi Impex have arrangements all modes of processing and printing
              (rotary/panel). We outsource our processing from units of high
              quality standards. We do have specialized quality control
              personnel to keep a check on quality of goods right from the
              beginning till the end.
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
              At Elahi Impex, we are equipped with latest and modern stitching
              machines a highly skilled labor to meet our modern stitching
              requirements. The machines include Singer, Safety + Over lock,
              Double needle, Kansai special and Flat lock machines.
            </p>
            <div>
              <Link href="/contact">Add Inquery</Link>
            </div>
          </div>
          <div className="manficbgimg Stitching"></div>
        </div>
      </div>
    </>
  );
};

export default manfacturing;
