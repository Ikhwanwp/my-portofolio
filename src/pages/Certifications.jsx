import { useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
// import { DotsVerticalIcon } from "@heroicons/react/outline";

const images = [
  "https://picsum.photos/seed/picsum3/500/300",
  "https://picsum.photos/seed/picsum3/500/300",
  "https://picsum.photos/seed/picsum3/500/300",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CarouselSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  function onNextSlide() {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }

  function onPrevSlide() {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }

  return (
    <div className="container">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="relative w-full h-96 transition-all duration-500 ease-in-out transform"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="absolute inset-0 object-cover w-full h-full"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 -mt-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={classNames(
                "w-3 h-3 mx-2 rounded-full transition-colors duration-200",
                index === activeIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => setActiveIndex(index)}
            >
              <span className="sr-only">{`Slide ${index + 1}`}</span>
            </button>
          ))}
        </div>
        <button className="absolute top-1/2 -mt-6 left-2" onClick={onPrevSlide}>
          {/* <ChevronLeftIcon className="w-6 h-6 text-gray-300" /> */} H
          <span className="sr-only">Previous Slide</span>
        </button>
        <button
          className="absolute top-1/2 -mt-6 right-2"
          onClick={onNextSlide}
        >
          {/* <ChevronRightIcon className="w-6 h-6 text-gray-300" /> */} H
          <span className="sr-only">Next Slide</span>
        </button>
        <button className="absolute top-2 right-2">
          {/* <DotsVerticalIcon className="w-6 h-6 text-gray-300" /> */} B
          <span className="sr-only">More Options</span>
        </button>
      </div>
    </div>
  );
}
