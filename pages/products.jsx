import React from "react";

const products = () => {
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

  return (
    <div>
      <div className="productsParent">
        <div className="mainProducts">
          <h3>Product Lines</h3>
          <div className="productsItem">
            {sliderImages.map((v, i) => (
              <div className="itemImage" key={i}>
                <span>{v.name}</span>
                <img src={v.pic} alt="Product images" />
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
    </div>
  );
};

export default products;
