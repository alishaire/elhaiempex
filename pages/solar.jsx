import React, { useEffect, useState } from "react";
import { Galleria } from "primereact/galleria";
import Image from "next/image";
export const PhotoService = {
  getData() {
    return [
      {
        itemImageSrc: "/Solarpanel/man.jpg",
        thumbnailImageSrc:  "./Solarpanel/man.jpg",
        alt: "Description for Image 1",
        title: "Title 1",
      },
      {
        itemImageSrc:  "/Solarpanel/pank.jpg",
        thumbnailImageSrc: "./Solarpanel/pank.jpg",
        alt: "Description for Image 2",
        title: "Title 2",
      },
      {
        itemImageSrc:  "/Solarpanel/roof.jpg",
        thumbnailImageSrc: "./Solarpanel/roof.jpg",
        alt: "Description for Image 2",
        title: "Title 2",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
const Solar = () => {
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
      <div className="solarParent">
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
        <div className="solarContent">
          <h1>Electric Solar Plants </h1>
          <p>
            At Elahi Impex, we are proud to champion sustainability by
            harnessing the power of the sun. Committed to reducing our
            ecological footprint, we utilize an impressive 70% of our
            electricity needs through state-of-the-art Solar Electric Systems.
            At the heart of this commitment lies our very own Solar Plant, a
            testament to our dedication to environmental responsibility.
          </p>
          <h2>Why Solar?</h2>
          <p>
            By relying on solar energy, we actively contribute to the reduction
            of conventional electricity consumption from the grid stations. Our
            Solar Electric Systems not only power our operations but also
            exemplify our pledge to sustainable practices, promoting a greener,
            cleaner, and more eco-friendly approach to manufacturing.
          </p>
          <h2>Advancing Towards Energy Independence:</h2>
          <p>
            Our solar initiative not only aligns with our commitment to
            environmental stewardship but also propels us towards energy
            independence. By utilizing the abundant and renewable energy
            provided by the sun, we play a role in shaping a more sustainable
            future for generations to come.
          </p>
<h2>Key Highlights</h2>
          <p>
            <strong>70% Solar-Powered:</strong> A substantial portion of our
            electricity needs is met through clean and renewable solar energy,
            significantly reducing our reliance on traditional power sources.
          </p>
          <p>
            <strong>Own Solar Plant:</strong> Our dedicated solar plant is a
            testament to our proactive approach to sustainability, ensuring that
            we take responsibility for our energy consumption.
          </p>
          <p>
            <strong> Environmental Stewardship: </strong> We recognize the
            importance of minimizing our impact on the environment, and our
            solar initiatives underscore our commitment to sustainable
            practices. At Elahi Impex, we believe that every action, no matter
            how small, contributes to a more sustainable and eco-conscious
            future. Join us on our journey towards a greener tomorrow as we
            continue to innovate, reduce, and reimagine the way we power our
            operations for a brighter and more sustainable world.
          </p>
        </div>
    
      </div>
      <div className="solarContentBelow"></div>
    </>
  );
};

export default Solar;
