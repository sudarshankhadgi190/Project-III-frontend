
// import React, { useEffect, useState } from 'react'
// // import image1 from '../assest/banner/img1.webp'
// // import image2 from '../assest/banner/img2.webp'
// // import image3 from '../assest/banner/img3.jpg'
// // import image4 from '../assest/banner/img4.jpg'
// // import image5 from '../assest/banner/img5.webp'
// import image9 from '../assest/banner/img9.png'
// import image10 from '../assest/banner/img10.png'
// import image25 from '../assest/banner/img25.webp'

// import image1Mobile from '../assest/banner/img1_mobile.jpg'
// import image2Mobile from '../assest/banner/img2_mobile.webp'
// import image3Mobile from '../assest/banner/img3_mobile.jpg'
// import image4Mobile from '../assest/banner/img4_mobile.jpg'
// import image5Mobile from '../assest/banner/img5_mobile.png'

// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";


// const BannerProduct = () => {
//     const [currentImage,setCurrentImage] = useState(0)

//     const desktopImages = [
//         image9,
//         image10,
//         image25,
//         // image4,
//         // image5
//     ]

//     const mobileImages = [
//         image1Mobile,
//         image2Mobile,
//         image3Mobile,
//         image4Mobile,
//         image5Mobile
//     ]

//     const nextImage = React.useCallback(() => {
//         if(desktopImages.length - 1 > currentImage){
//             setCurrentImage(preve => preve + 1)
//         }
//     }, [currentImage, desktopImages.length])

//     const preveImage = () =>{
//         if(currentImage !== 0){
//             setCurrentImage(preve => preve - 1)
//         }
        
//     }


//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             if(desktopImages.length - 1 > currentImage){
//                 nextImage()
//             }else{
//                 setCurrentImage(0)
//             }
//         },5000)

//         return ()=> clearInterval(interval)
//     },[currentImage, desktopImages.length, nextImage])

//   return (
//     <div className='container mx-auto px-4 rounded '>
//         <div className='h-56 md:h-80 w-full bg-slate-200 relative'>

//                 <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
//                     <div className=' flex justify-between w-full text-2xl'>
//                         <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
//                         <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
//                     </div>
//                 </div>

//                 {/**desktop and tablet version */}
//               <div className='hidden md:flex h-full w-full overflow-hidden'>
//                 {
//                         desktopImages.map((imageURl,index)=>{
//                             return(
//                             <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
//                                 <img src={imageURl} alt={`Banner ${index + 1}`} className='w-full h-full'/>
//                             </div>
//                             )
//                         })
//                 }
//               </div>


//                 {/**mobile version */}
//                 <div className='flex h-full w-full overflow-hidden md:hidden'>
//                 {
//                         mobileImages.map((imageURl,index)=>{
//                             return(
//                             <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
//                                 <img src={imageURl} alt={`Banner ${index + 1}`} className='w-full h-full object-cover'/>
//                             </div>
//                             )
//                         })
//                 }
//               </div>


//         </div>
//     </div>
//   )
// }

// export default BannerProduct

import React, { useEffect, useState, useCallback } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// Unified array for both mobile and desktop images
import img1Desktop from '../assest/banner/img9.png';
import img2Desktop from '../assest/banner/img10.png';
import img3Desktop from '../assest/banner/img25.webp';

import img1Mobile from '../assest/banner/img1_mobile.jpg';
import img2Mobile from '../assest/banner/img2_mobile.webp';
import img3Mobile from '../assest/banner/img3_mobile.jpg';

// Image set (match desktop and mobile images by index)
const images = [
  {
    desktop: img1Desktop,
    mobile: img1Mobile
  },
  {
    desktop: img2Desktop,
    mobile: img2Mobile
  },
  {
    desktop: img3Desktop,
    mobile: img3Mobile
  }
];

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="container mx-auto px-4 rounded">
      <div className="h-56 md:h-80 w-full bg-slate-200 relative overflow-hidden">

        {/* Navigation Buttons (only on desktop) */}
        <div className="absolute z-10 h-full w-full md:flex items-center hidden">
          <div className="flex justify-between w-full text-2xl px-2">
            <button onClick={prevImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleLeft />
            </button>
            <button onClick={nextImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex h-full w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-full h-full min-w-full min-h-full">
              <img src={img.desktop} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden h-full w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-full h-full min-w-full min-h-full">
              <img src={img.mobile} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
