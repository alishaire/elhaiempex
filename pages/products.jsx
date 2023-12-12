import React, { useEffect, useState, useRef } from "react";
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
      name: "Kitchen Linen",
      pic: "./products/KitchenLinen.jpg",
      heading: "Kitchen Linen: Where Culinary Elegance Meets Practicality ",
      desc: "Unleash the chef within you and adorn your kitchen with our Kitchen Linen – the perfect blend of style and functionality for your culinary haven.",
    },

    {
      name: "Lab Coat",
      pic: "./products/LabCoat.jpg",

      heading: "Lab Coat: Elevate Professionalism, Embrace Comfort ",
      desc: "Step into excellence with our Lab Coat – a symbol of precision and comfort, tailored for those who redefine standards in the professional realm.",
    },

    {
      name: "Utility Bedding",
      pic: "./UtilityBeding/6.jpg",
      heading: "Utility Bedding: Versatile Comfort for Every Dream ",
      desc: "Redefine your sleep sanctuary with Utility Bedding – where versatility meets unparalleled comfort, ensuring a dreamy escape with every night's rest.",
    },

    {
      name: "Bath Accessories",
      pic: "./products/Bedding with window.jpg",
      heading: "Bath Accessories: Luxe Details for Your Pampering Rituals ",
      desc: "Elevate your bath experience with Bath Accessories – intricate details that turn every moment into a spa-like indulgence, creating a haven of relaxation.",
    },

    {
      name: "Window Treatments",
      pic: "./products/Window treatment.jpg",

      heading: "Window Treatments: Unveiling Elegance, One Window at a Time ",
      desc: "Transform your living spaces with Window Treatments – where elegance meets functionality, creating a picturesque ambiance that reflects your style.",
    },
    {
      name: "Bath & beach Towels",
      pic: "./products/Bath & Beach.jpg",

      heading: "Bath & Beach Towels: Dive into Luxury, Embrace the Sun ",
      desc: "Whether at the beach or in your home oasis, our Bath & Beach Towels invite you to dive into luxury and embrace the warmth of the sun with every use.",
    },
  ];
  const PhotoService = {
    getData() {
      return [
        {
          itemImageSrc: "/Kitchen/1.jpg",
          thumbnailImageSrc: "/Kitchen/1.jpg",
          alt: "Kitchen Linen 1",
          title: "Kitchen Linen 1",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc: "/Kitchen/2.jpg",
          thumbnailImageSrc: "/Kitchen/2.jpg",
          alt: "Kitchen Linen 2",
          title: "Kitchen Linen 2",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc:"/Kitchen/3.jpg",
          thumbnailImageSrc:"/Kitchen/3.jpg",
          alt: "Kitchen Linen 3",
          title: "Kitchen Linen 3",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc: "/Kitchen/4.jpg",
          thumbnailImageSrc: "/Kitchen/4.jpg",
          alt: "Kitchen Linen Image 4",
          title: "Kitchen Linen 4",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc:"/Kitchen/5.jpg",
          thumbnailImageSrc:"/Kitchen/5.jpg",
          alt: "Kitchen Linen 5",
          title: "Kitchen Linen 5",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc:"/Kitchen/6.jpg",
          thumbnailImageSrc:"/Kitchen/6.jpg",
          alt: "Kitchen Linen 6",
          title: "Kitchen Linen 6",
          name: "Kitchen Linen",
        },
        // ------

        {
          itemImageSrc: "/LabCoat/7.jpg",
          thumbnailImageSrc: "/LabCoat/7.jpg",
          alt: "Lab Coat for Image 1",
          title: "Lab Coat 7",
          name: "Lab Coat",
        },
        {
          itemImageSrc: "/LabCoat/2.jpg",
          thumbnailImageSrc: "/LabCoat/2.jpg",
          alt: "Lab Coat for Image 2",
          title: "Lab Coat 2",
          name: "Lab Coat",
        },
        {
          itemImageSrc: "/LabCoat/3.jpg",
          thumbnailImageSrc: "/LabCoat/3.jpg",
          alt: "Lab Coat for Image 3",
          title: "Lab Coat 3",
          name: "Lab Coat",
        },
        {
          itemImageSrc: "/LabCoat/4.jpg",
          thumbnailImageSrc: "/LabCoat/4.jpg",
          alt: "Lab Coat for Image 4",
          title: "Lab Coat 4",
          name: "Lab Coat",
        },
        {
          itemImageSrc: "/LabCoat/5.jpg",
          thumbnailImageSrc: "/LabCoat/5.jpg",
          alt: "Lab Coat for Image 5",
          title: "Lab Coat 5",
          name: "Lab Coat",
        },
        {
          itemImageSrc: "/LabCoat/6.jpg",
          thumbnailImageSrc: "/LabCoat/6.jpg",
          alt: "Lab Coat for Image 6",
          title: "Lab Coat 6",
          name: "Lab Coat",
        },
// ==============
        {
          itemImageSrc:
          "./UtilityBeding/1.jpg",
          thumbnailImageSrc:
          "./UtilityBeding/2.jpg",
          alt: "Utility Bedding for Image",
          title: "Utility Bedding",
          name: "Utility Bedding",
        },
        {
          itemImageSrc:
          "./UtilityBeding/3.jpg",
          thumbnailImageSrc:
          "./UtilityBeding/3.jpg",
          alt: "Utility Bedding for Image",
          title: "Utility Bedding",
          name: "Utility Bedding",
        },
        {
          itemImageSrc:
          "./UtilityBeding/4.jpg",
          thumbnailImageSrc:
          "./UtilityBeding/4.jpg",
          alt: "Utility Bedding for Image",
          title: "Utility Bedding",
          name: "Utility Bedding",
        },
        {
          itemImageSrc:
          "./UtilityBeding/5.jpg",
          thumbnailImageSrc:
          "./UtilityBeding/5.jpg",
          alt: "Utility Bedding for Image",
          title: "Utility Bedding",
          name: "Utility Bedding",
        },
        {
          itemImageSrc:
          "./UtilityBeding/7.jpg",
          thumbnailImageSrc:
          "./UtilityBeding/7.jpg",
          alt: "Utility Bedding for Image",
          title: "Utility Bedding",
          name: "Utility Bedding",
        },
        {
          itemImageSrc:
          "./UtilityBeding/6.jpg",
          thumbnailImageSrc:
          "./UtilityBeding/6.jpg",
          alt: "Utility Bedding for Image",
          title: "Utility Bedding",
          name: "Utility Bedding",
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
  const galleria = useRef(null);

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
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%", height:"50vh", objectFit:"cover" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        style={{
          maxWidth: "100px",
          marginTop: "10px",
          minHeight: "70px",
          objectFit: "cover",
        }}
        alt={item.alt}
      />
    );
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
      <div className="productsParent">
        <div className="mainProducts">
          <h3>Product Lines</h3>
          <h2 className="topBannerHeading">Welcome to Elahi Impex - Unveiling Luxury in Every Thread</h2>
          <p className="topBannerDesc">
            Discover a world of sophistication and comfort with Elahi Impex&apos;s
            exclusive range of home textile products. Immerse yourself in the
            opulence of our meticulously crafted collection, where each item is
            a testament to our commitment to quality and timeless design.
            Explore the diverse categories that redefine luxury living:
          </p>
          <div className="productsItem">
            {sliderImages.map((v, i) => (
              <div className="itemImage" key={i}>
                <span>{v.name}</span>
                <img src={v.pic} alt="Product images" />

                <div className="contentOverlay">
                  <h2>{v.heading}</h2>
                  <p>{v.desc}</p>

                  <button onClick={(i) => modeltoggle(v)}>Gallery</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>

      <div className={openmodel ? "imagesMainModel open" : "imagesMainModel"}>
        <i
          onClick={() => setOpenmodel(false)}
          className="fa-solid fa-xmark closemodel"
        ></i>
        <div className="imagesChildDiv">
          <Galleria
            value={filteredImages}
            className="gallery"
            responsiveOptions={responsiveOptions}
            numVisible={5}
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
