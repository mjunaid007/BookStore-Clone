import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 ">
          <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Hello,welcomes here to learn something
            <span className="text-pink-400">new everyday!!!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            numquam assumenda officiis corporis voluptatum dolorem voluptas illo
            nam cumque accusamus dolor autem nisi voluptatibus aliquam,
            doloribus, ad dicta eaque laboriosam.
          </p>
        </div>
        </div>
        <div className="w-full md:w-1/2 ">Right</div>
      </div>
    </>
  );
};

export default Banner;
