import React, { useEffect, useState } from "react";
import { Galleria } from "primereact/galleria";
const Products = () => {
  const [openmodel, setOpenmodel] = useState(false);
  useEffect(() => {
    if (openmodel) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [openmodel]);
  const sliderImages = [
    {
      name: "Fashion Bedding",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/CharismaMelangeVelvetCS-1-300x253.jpg",
    },

    {
      name: "Utility",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/Cannon_ClassicCotton_MP_HERO-300x262.jpg",
    },

    {
      name: "Sheets",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/Cannon_Heritage_SS_STACK3-245x300.jpg",
    },

    {
      name: "Decor",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/Printed-Decorative-Pillow-300x251.jpg",
    },

    {
      name: "Window",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/BM_2PkWindowPanels_BrightWhite-SilverBrooches-300x300.jpg",
    },
    {
      name: "Bath",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/RWBFields_Americana_TS_Blue_HERO-300x251.jpg",
    },
  ];
  const PhotoService = {
    getData() {
      return [
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
          name: "Fashion Bedding",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
          name: "Fashion Bedding",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg",
          alt: "Description for Image 3",
          title: "Title 3",
          name: "Fashion Bedding",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg",
          alt: "Description for Image 4",
          title: "Title 4",
          name: "Utility",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg",
          alt: "Description for Image 5",
          title: "Title 5",
          name: "Utility",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg",
          alt: "Description for Image 6",
          title: "Title 6",
          name: "Utility",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg",
          alt: "Description for Image 7",
          title: "Title 7",
          name: "Sheets",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg",
          alt: "Description for Image 8",
          title: "Title 8",
          name: "Sheets",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg",
          alt: "Description for Image 9",
          title: "Title 9",
          name: "Sheets",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg",
          alt: "Description for Image 10",
          title: "Title 10",
          name: "Decor",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg",
          alt: "Description for Image 11",
          title: "Title 11",
          name: "Decor",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg",
          alt: "Description for Image 12",
          title: "Title 12",
          name: "Decor",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg",
          alt: "Description for Image 13",
          title: "Title 13",
          name: "Window",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg",
          alt: "Description for Image 14",
          title: "Title 14",
          name: "Window",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg",
          alt: "Description for Image 15",
          title: "Title 15",
          name: "Window",
        },
      ];
    },

    getImages() {
      return Promise.resolve(this.getData());
    },
  };


  const [images, setImages] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  const [filteredImages, setFilteredImages] = useState([]);

  console.log(filteredImages);
  const modeltoggle = (v) => {
    const filtered = images.filter((image) => image.name === v.name);

    setFilteredImages(filtered);

    setOpenmodel(!openmodel);
  };

  return (
    <div>
      <div className="productsParent maxpad">
        <div className="mainProducts">
          <h3>Product Lines</h3>
          <div className="productsItem">
            {sliderImages.map((v, i) => (
              <div className="itemImage" key={i}>
                <span>{v.name}</span>
                <img
                  onClick={(i) => modeltoggle(v)}
                  src={v.pic}
                  alt="Product images"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="featuredProduct">
          <img
            src="https://pemamerica.com/wp-content/uploads/2020/07/London-Fog.jpg"
            alt="PRODUCTS ITEMS"
          />
        </div>
      </div>
      <div className={openmodel ? "contactmodel open" : "contactmodel"}>
        <div className="contactopenmodel">
          <div style={{ background: "transparent" }} className="contact-cross">
            <i
              onClick={() => setOpenmodel(false)}
              className="fa-solid fa-xmark"
            ></i>
          </div>
          <Galleria
            value={filteredImages}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            style={{ maxWidth: "640px" }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            showItemNavigators
            showItemNavigatorsOnHover
            circular
            autoPlay
            transitionInterval={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
