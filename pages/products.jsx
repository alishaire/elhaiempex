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
    {
      name: "Hotel Slipper",
      pic: "./products/hotelsliper.jpg",

      heading: "Hotel Slippers: Walk the Luxury Path ",
      desc: "Step into a world of opulence with our Hotel Slippers, where each step is a journey in comfort and sophistication.",
    },
  ];
  const PhotoService = {
    getData() {
      return [
        // Kitchen =============================
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
        // LabCoat ------

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
// UtilityBeding ==============
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
        // WindowTreatment =====================
        {
          itemImageSrc:
          "./WindowTreatment/1.jpg",
          thumbnailImageSrc:
          "./WindowTreatment/1.jpg",
          alt: "Window Treatments for Image 9",
          title: "Window Treatments ",
          name: "Window Treatments",
        },
        {
          itemImageSrc:
          "./WindowTreatment/2.jpg",
          thumbnailImageSrc:
          "./WindowTreatment/2.jpg",
          alt: "Window Treatments for Image 9",
          title: "Window Treatments ",
          name: "Window Treatments",
        },
        {
          itemImageSrc:
          "./WindowTreatment/3.jpg",
          thumbnailImageSrc:
          "./WindowTreatment/3.jpg",
          alt: "Window Treatments for Image 9",
          title: "Window Treatments ",
          name: "Window Treatments",
        },
        {
          itemImageSrc:
          "./WindowTreatment/4.jpg",
          thumbnailImageSrc:
          "./WindowTreatment/4.jpg",
          alt: "Window Treatments for Image 9",
          title: "Window Treatments ",
          name: "Window Treatments",
        },
        {
          itemImageSrc:
          "./WindowTreatment/5.jpg",
          thumbnailImageSrc:
          "./WindowTreatment/5.jpg",
          alt: "Window Treatments for Image 9",
          title: "Window Treatments ",
          name: "Window Treatments",
        },
        {
          itemImageSrc:
          "./WindowTreatment/6.jpg",
          thumbnailImageSrc:
          "./WindowTreatment/6.jpg",
          alt: "Window Treatments for Image 9",
          title: "Window Treatments ",
          name: "Window Treatments",
        },
        {
          itemImageSrc:
          "./WindowTreatment/7.jpg",
          thumbnailImageSrc:
          "./WindowTreatment/7.jpg",
          alt: "Window Treatments for Image 9",
          title: "Window Treatments ",
          name: "Window Treatments",
        },
        //BathAccessories ================
        {
          itemImageSrc:
          "./BathAccessories/1.jpg",
          thumbnailImageSrc:
          "./BathAccessories/1.jpg",
          alt: "Bath Accessories",
          title: "Bath Accessories",
          name: "Bath Accessories",
        },
        {
          itemImageSrc:
          "./BathAccessories/2.jpg",
          thumbnailImageSrc:
          "./BathAccessories/2.jpg",
          alt: "Bath Accessories",
          title: "Bath Accessories",
          name: "Bath Accessories",
        },
        {
          itemImageSrc:
          "./BathAccessories/3.jpg",
          thumbnailImageSrc:
          "./BathAccessories/3.jpg",
          alt: "Bath Accessories",
          title: "Bath Accessories",
          name: "Bath Accessories",
        },
        {
          itemImageSrc:
          "./BathAccessories/4.jpg",
          thumbnailImageSrc:
          "./BathAccessories/4.jpg",
          alt: "Bath Accessories",
          title: "Bath Accessories",
          name: "Bath Accessories",
        },
        {
          itemImageSrc:
          "./BathAccessories/5.jpg",
          thumbnailImageSrc:
          "./BathAccessories/5.jpg",
          alt: "Bath Accessories",
          title: "Bath Accessories",
          name: "Bath Accessories",
        },
        {
          itemImageSrc:
          "./BathAccessories/6.jpg",
          thumbnailImageSrc:
          "./BathAccessories/6.jpg",
          alt: "Bath Accessories",
          title: "Bath Accessories",
          name: "Bath Accessories",
        },
// Bath & Beach ======================
        {
          itemImageSrc:
          "./BathBeach/1.jpg",
          thumbnailImageSrc:
          "./BathBeach/1.jpg",
          alt: "Bath & beach Towels",
          title: "Bath & beach Towels",
          name: "Bath & beach Towels",
        },
        {
          itemImageSrc:
          "./BathBeach/2.jpg",
          thumbnailImageSrc:
          "./BathBeach/2.jpg",
          alt: "Bath & beach Towels",
          title: "Bath & beach Towels",
          name: "Bath & beach Towels",
        },
        {
          itemImageSrc:
          "./BathBeach/3.jpg",
          thumbnailImageSrc:
          "./BathBeach/3.jpg",
          alt: "Bath & beach Towels",
          title: "Bath & beach Towels",
          name: "Bath & beach Towels",
        },
        {
          itemImageSrc:
          "./BathBeach/4.jpg",
          thumbnailImageSrc:
          "./BathBeach/4.jpg",
          alt: "Bath & beach Towels",
          title: "Bath & beach Towels",
          name: "Bath & beach Towels",
        },
        {
          itemImageSrc:
          "./BathBeach/5.jpg",
          thumbnailImageSrc:
          "./BathBeach/5.jpg",
          alt: "Bath & beach Towels",
          title: "Bath & beach Towels",
          name: "Bath & beach Towels",
        },
        {
          itemImageSrc:
          "./BathBeach/6.jpg",
          thumbnailImageSrc:
          "./BathBeach/6.jpg",
          alt: "Bath & beach Towels",
          title: "Bath & beach Towels",
          name: "Bath & beach Towels",
        },
        {
          itemImageSrc:
          "./BathBeach/7.jpg",
          thumbnailImageSrc:
          "./BathBeach/7.jpg",
          alt: "Bath & beach Towels",
          title: "Bath & beach Towels",
          name: "Bath & beach Towels",
        },
// Hotel Sliper =====================
        {
          itemImageSrc:
          "./HotelSliper/1.jpg",
          thumbnailImageSrc:
          "./HotelSliper/1.jpg",
          alt: "Hotel Slipper",
          title: "Hotel Slipper",
          name: "Hotel Slipper",
        },
        {
          itemImageSrc:
          "./HotelSliper/2.jpg",
          thumbnailImageSrc:
          "./HotelSliper/2.jpg",
          alt: "Hotel Slipper",
          title: "Hotel Slipper",
          name: "Hotel Slipper",
        },
        {
          itemImageSrc:
          "./HotelSliper/3.jpg",
          thumbnailImageSrc:
          "./HotelSliper/3.jpg",
          alt: "Hotel Slipper",
          title: "Hotel Slipper",
          name: "Hotel Slipper",
        },
        {
          itemImageSrc:
          "./HotelSliper/4.jpg",
          thumbnailImageSrc:
          "./HotelSliper/4.jpg",
          alt: "Hotel Slipper",
          title: "Hotel Slipper",
          name: "Hotel Slipper",
        },
        {
          itemImageSrc:
          "./HotelSliper/5.jpg",
          thumbnailImageSrc:
          "./HotelSliper/5.jpg",
          alt: "Hotel Slipper",
          title: "Hotel Slipper",
          name: "Hotel Slipper",
        },
        {
          itemImageSrc:
          "./HotelSliper/6.jpg",
          thumbnailImageSrc:
          "./HotelSliper/6.jpg",
          alt: "Hotel Slipper",
          title: "Hotel Slipper",
          name: "Hotel Slipper",
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
