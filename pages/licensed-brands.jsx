import React , { useState, useEffect } from 'react'



const Licensed = () => {

    const imgArray = [
     

        {
            img: "/assets/brands/LOGO-03.png.crdownload",
          },
    
          {
            img: "/assets/brands/LOGO-04.png.crdownload",
          },
    
          {
            img: "/assets/brands/LOGO-05.png.crdownload",
          },
      
          {
            img: "/assets/brands/LOGO-06.png.crdownload",
          },
      
          {
            img: "/assets/brands/LOGO-07.png.crdownload",
          },
      
          {
            img: "/assets/brands/LOGO-08.png.crdownload",
          },
      
          {
            img: "/assets/brands/LOGO-09.png.crdownload",
          },

          {
            img: "/assets/brands/LOGO-10.png.crdownload",
          },
      

          {
            img: "/assets/brands/LOGO-11.png.crdownload",
          },
      

          {
            img: "/assets/brands/LOGO-12.png.crdownload",
          },
      

          {
            img: "/assets/brands/LOGO-13.png.crdownload",
          },
          {
            img: "/assets/brands/royal-velvet-logo-1.jpeg.crdownload",
          },
      
          {
            img: "/assets/brands/LOGO-14.png.crdownload",
          },

          {
            img: "/assets/brands/LOGO-15.png.crdownload",
          },
        
          {
            img: "/assets/brands/LOGO-17.png.crdownload",
          },
          {
            img: "/assets/brands/LOGO-18.png.crdownload",
          },
          {
            img: "/assets/brands/LOGO-19.png",
          },
          {
            img: "/assets/brands/royal-velvet-logo-1.jpeg.crdownload",
          },
        
      

    
       
      ];
    
      const img = [
        "http://pemamerica.com/wp-content/uploads/2022/12/Oceanfront-Resort.jpg",
        "https://img.freepik.com/free-psd/front-view-room-with-bed-modern-wooden-night-tables-mockup_176382-1965.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2064.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/bedroom-with-double-bed-white-furniture_176382-50.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/bedroom-background-zoom-calls_52683-95239.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/realistic-bright-modern-double-bedroom-with-furniture_176382-444.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/premium-psd/isometric-bed-3d-rendering_525986-346.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2154.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/front-view-room-with-bed-modern-wooden-night-tables-mockup_176382-1962.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "http://pemamerica.com/wp-content/uploads/2022/12/Oceanfront-Resort.jpg",
        "https://img.freepik.com/free-psd/front-view-room-with-bed-modern-wooden-night-tables-mockup_176382-1965.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2064.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/bedroom-with-double-bed-white-furniture_176382-50.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/bedroom-background-zoom-calls_52683-95239.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/realistic-bright-modern-double-bedroom-with-furniture_176382-444.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/premium-psd/isometric-bed-3d-rendering_525986-346.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2154.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/front-view-room-with-bed-modern-wooden-night-tables-mockup_176382-1962.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/realistic-bright-modern-double-bedroom-with-furniture_176382-444.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/premium-psd/isometric-bed-3d-rendering_525986-346.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2154.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/front-view-room-with-bed-modern-wooden-night-tables-mockup_176382-1962.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "http://pemamerica.com/wp-content/uploads/2022/12/Oceanfront-Resort.jpg",
        "https://img.freepik.com/premium-photo/contemporary-modern-wall-system-living-room_124460-6.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-psd/modern-bedroom-interior-isolated_176382-702.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
        "https://img.freepik.com/free-photo/double-bed-with-cushions_1203-19.jpg?size=626&ext=jpg&ga=GA1.1.1839979533.1700575049&semt=sph",
      ];
    
      const [hoverState, setHoverState] = useState(0);
    
      useEffect(() => {
        const imageElement = document.getElementById("hoveredImage");
        if (imageElement) {
          imageElement.style.opacity = 0.5;
          imageElement.style.transform = "scale(1.2)";
    
          setTimeout(() => {
            imageElement.style.opacity = 1;
            imageElement.style.transform = "scale(1)";
          }, 300);
        }
      }, [hoverState]);
    
    
  return (
    <div>


<div className="outline maxpad">
      <div className="brandsParentDiv">
        <div className="BrandsImages">
       
          <img src={img[hoverState]} id="hoveredImage" alt="" />
        </div>
        <div className="BrandLogos">
          <div className="brandContent">
            <h3>Licensed Brands</h3>
          </div>

          <div className="logoImages">
            {imgArray.map((v, i) => (
              <img
                src={v.img}
                alt="Branding logos"
                onMouseEnter={() => setHoverState(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
        

    </div>
  )
}

export default Licensed