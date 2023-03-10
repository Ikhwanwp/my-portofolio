import React from "react";

export default function Portofolios() {
  return (
    <div className="container">
      <div className="w-full text-center mb-10">
        <h1 className="text-color-primary font-bold text-xl">Projects</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center space-x-2">
        <button
          type=""
          className="text-white text-xl hover:bg-color-primary hover:rounded-lg"
        >
          All
        </button>
        <button
          type=""
          className="text-white text-xl hover:bg-color-primary hover:rounded-lg"
        >
          Web
        </button>
        <button
          type=""
          className="text-white text-xl hover:bg-color-primary hover:rounded-lg"
        >
          Mobile
        </button>
        <button
          type=""
          className="text-white text-xl hover:bg-color-primary hover:rounded-lg"
        >
          Design
        </button>
      </div>
      <div className="w-full mt-4">
        <div className="w-2/3 h-52 bg-white mx-auto rounded-xl"></div>
        <div className="w-2/3 max-h-fit mx-auto mt-3">
          <h3 className="text-color-secondary-dark">Web Developoment</h3>
          <h2 className="text-color-secondary font-bold text-xl">
            Website Streaming Film (Nofi)
          </h2>
          <p className="text-color-secondary">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
    </div>
  );
}
