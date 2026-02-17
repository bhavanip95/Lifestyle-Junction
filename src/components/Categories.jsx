import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { CATEGORY_CONFIG } from "../Config/CategoryConfig";





function Categories() {
  return (
    <>
      <Blog />

      <div data-theme="valentine" className="py-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-semibold text-center my-6 py-6">
          Explore Our Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {CATEGORY_CONFIG.map((category) => (
            <div
              key={category.key}
              className="card w-80 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={CATEGORY_IMAGES[category.key]}
                  alt={category.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>

                <div className="card-actions justify-center">
                  <Link
                    to={category.route}
                    className="btn btn-outline btn-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
