// import React, { FC } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "none",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "none",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// interface SliderDataType {
//   id: number;
//   title: string;
//   offer: string;
//   tag: string;
//   tagClass: string;
//   bg: string;
// }

// interface Types {
//   sliderData: SliderDataType[];
//   bodyStyle: string;
// }

// const MainSlider: FC<Types> = ({ sliderData, bodyStyle }) => {
//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-black">
//       <div className="container mx-auto h-full">
//         <Slider {...settings}>
//           {sliderData.map((data) => (
//             <div key={data.id} className={bodyStyle}>
//               <p
//                 className={data.tagClass}
//                 style={{ backgroundColor: data.bg }}
//               >
//                 {data.tag}
//               </p>
//               <p className="text-primary text-lg font-semiBold">{data.title}</p>
//               <p className="text-white text-lg font-semiBold">{data.offer}</p>
//             </div>
//           )) as React.ReactNode[]}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default MainSlider;

import React, { useState } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
}

const slides: Slide[] = [
  { id: 1, image: '/images/slide1.jpg', title: 'Slide 1' },
  { id: 2, image: '/images/slide2.jpg', title: 'Slide 2' },
  { id: 3, image: '/images/slide3.jpg', title: 'Slide 3' },
];

const MainSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const length = slides.length;

  const nextSlide = (): void => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = (): void => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider-container relative">
      <button onClick={prevSlide} className="prev-slide">
        &#9664;
      </button>
      <button onClick={nextSlide} className="next-slide">
        &#9654;
      </button>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : 'inactive'}`}
        >
          {index === currentSlide && (
            <img src={slide.image} alt={slide.title} className="w-full h-auto" />
          )}
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;

