import React from "react";
import PageSection from "@/components/PageSection";

import product1 from "@/assets/categorys/product2/product1.jpg";
import product2 from "@/assets/categorys/product2/product2.jpg";
import product3 from "@/assets/categorys/product2/product3.jpg";
import product4 from "@/assets/categorys/product2/product4.jpg";
import product5 from "@/assets/categorys/product2/product5.jpg";
import product6 from "@/assets/categorys/product2/product6.jpg";
import product7 from "@/assets/categorys/product2/product7.jpg";
import product8 from "@/assets/categorys/product2/product8.jpg";
import product9 from "@/assets/categorys/product2/product9.jpg";
import product10 from "@/assets/categorys/product2/product10.jpg";
import product11 from "@/assets/categorys/product2/product11.jpg";
import product12 from "@/assets/categorys/product2/product12.jpg";
import product13 from "@/assets/categorys/product2/product13.jpg";
import product14 from "@/assets/categorys/product2/product14.jpg";

import video1 from "@/assets/categorys/product1/video1.mp4";
import video2 from "@/assets/categorys/product1/video2.mp4";

import Navigate from "@/components/categorys/Navigate";

const Product2 = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 9,
      src: product9,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 10,
      src: product10,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 11,
      src: product11,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 12,
      src: product12,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 13,
      src: product13,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
    {
      id: 14,
      src: product14,
      category: "Titulo",
      code: "",
      brand: "@elianacaro12",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="Titulo Producto 1"
      subtitle={`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Dignissimos sunt enim eum possimus, culpa veritatis hic aspernatur
    numquam ducimus exercitationem fuga nemo consequatur odit
    laudantium voluptate facilis veniam perferendis pariatur?`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-[#35EEED] duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
            <div className="rounded-lg shadow-lg shadow-[#35EEED] duration-200 hover:scale-105">
              <a href="" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={video1}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @elianacaro12
                  </p>
                </div>
              </a>
            </div>
            <div className="rounded-lg shadow-lg shadow-[#35EEED] duration-200 hover:scale-105">
              <a href="" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={video2}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @elianacaro12
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Product2;
