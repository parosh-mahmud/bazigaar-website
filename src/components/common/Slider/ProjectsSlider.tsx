// import React, { FC, Fragment } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image, { StaticImageData } from "next/image";
// import Slider from "react-slick";

// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         borderRadius: "50%",
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
//         display: "block",
//         padding: "2px",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     />
//   );
// }
// interface types {
//   sliderData: {
//     id: number;
//     img: StaticImageData;
//     title: string;
//     price: string;
//     winner: string;
//     des: string;
//     btnPrice: number;
//   }[];
// }
// const ProjectsSlider: FC<types> = ({ sliderData }) => {
//   const settings = {
//     // className: "center",
//     // centerMode: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
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
//       {
//         breakpoint: 300,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <Fragment>
//       <div className="mx-4 pt-[50px] lg:pt-[80px]">
//         <div className="container mx-auto py-3">
//           <Slider {...settings}>
//             {sliderData.map((data) => {
//               return (
//                 <div
//                   key={data.id}
//                   className="p-3 lg:p-5 mx-[-4px] lg:mx-1 my-3 bg-secondary shadow-package rounded-lg">
//                   <div className="flex items-center gap-4">
//                     <Image
//                       src={data.img}
//                       alt={data.title}
//                       width={data.img.width}
//                       height={data.img.height}
//                       // className="!w-full !h-full"
//                     />
//                     <div>
//                       <h1 className="pb-2 font-semiBold text-base md:text-xl lg:text-2xl text-primary">
//                         ${data.price}
//                       </h1>
//                       <p className="font-regular text-white text-sm md:text-base">
//                         Lucky Winner {data.winner}
//                       </p>
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="pt-4 font-semiBold text-xl lg:text-2xl text-white">
//                       {data.title}
//                     </h1>
//                     <p className="py-3 text-[#999999]">{data.des}</p>
//                     <button className="px-4 py-2 font-medium text-sm text-[#222] bg-primary rounded-md">
//                       Buy Ticket ${data.btnPrice}{" "}
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </Slider>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default ProjectsSlider;


import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    image: '/images/project1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    image: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3',
    image: '/images/project3.jpg',
  },
];

const ProjectsSlider: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const length = projects.length;

  const nextProject = (): void => {
    setCurrentProject(currentProject === length - 1 ? 0 : currentProject + 1);
  };

  const prevProject = (): void => {
    setCurrentProject(currentProject === 0 ? length - 1 : currentProject - 1);
  };

  return (
    <div className="projects-slider-container relative">
      <button onClick={prevProject} className="prev-project">
        &#9664;
      </button>
      <button onClick={nextProject} className="next-project">
        &#9654;
      </button>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-slide ${index === currentProject ? 'active' : 'inactive'}`}
        >
          {index === currentProject && (
            <div>
              <img src={project.image} alt={project.title} className="w-full h-auto" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      ))}

      <div className="projects-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentProject ? 'active-dot' : ''}`}
            onClick={() => setCurrentProject(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlider;
