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
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/CharismaMelangeVelvetCS-1-300x253.jpg",
    },

    {
      name: "Lab Coat",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/Cannon_ClassicCotton_MP_HERO-300x262.jpg",
    },

    {
      name: "Utility Bedding",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/Cannon_Heritage_SS_STACK3-245x300.jpg",
    },

    {
      name: "Bath Accessories",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/Printed-Decorative-Pillow-300x251.jpg",
    },

    {
      name: "Window Treatments",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/BM_2PkWindowPanels_BrightWhite-SilverBrooches-300x300.jpg",
    },
    {
      name: "Bath & beach Towels",
      pic: "https://pemamerica.com/wp-content/uploads/2020/08/RWBFields_Americana_TS_Blue_HERO-300x251.jpg",
    },
  ];
  const PhotoService = {
    getData() {
      return [
        {
          itemImageSrc: "/products/kitchen-1.webp",
          thumbnailImageSrc: "/products/kitchen-1.webp",
          alt: "Description for Image 1",
          title: "Title 1",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc: "/products/kitchen-2.jpeg",
          thumbnailImageSrc: "/products/kitchen-2.jpeg",
          alt: "Description for Image 2",
          title: "Title 2",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc:
            "https://img.freepik.com/free-photo/blue-platter-popcorn-candy-neatly-folded-towel-line-flowers-marble-table_114579-56535.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=ais",
          thumbnailImageSrc:
            "https://img.freepik.com/free-photo/blue-platter-popcorn-candy-neatly-folded-towel-line-flowers-marble-table_114579-56535.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=ais",
          alt: "Description for Image 3",
          title: "Title 3",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc: "/products/kitchen-4.jpg",
          thumbnailImageSrc: "/products/kitchen-4.jpg",
          alt: "Description for Image 4",
          title: "Title 4",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc:
            "https://img.freepik.com/free-photo/folded-napkin-wooden-table_1373-67.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=ais",
          thumbnailImageSrc:
            "https://img.freepik.com/free-photo/folded-napkin-wooden-table_1373-67.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=ais",
          alt: "Description for Image 5",
          title: "Title 5",
          name: "Kitchen Linen",
        },
        {
          itemImageSrc:
            "https://img.freepik.com/free-photo/bath-towel_1203-3129.jpg?w=826&t=st=1701693303~exp=1701693903~hmac=d64bb478409ea1ed43c0e5d63ff6dc2e4d8d5abe7a6890443870cd3edb6a461b",
          thumbnailImageSrc:
            "https://img.freepik.com/free-photo/bath-towel_1203-3129.jpg?w=826&t=st=1701693303~exp=1701693903~hmac=d64bb478409ea1ed43c0e5d63ff6dc2e4d8d5abe7a6890443870cd3edb6a461b",
          alt: "Description for Image 6",
          title: "Title 6",
          name: "Kitchen Linen",
        },
        // ------

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
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
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
