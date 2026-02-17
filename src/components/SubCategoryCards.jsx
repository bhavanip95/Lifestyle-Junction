import React from "react";
import { Link } from "react-router-dom";
import { categoryConfig } from "../Config/CategoryConfig";

export default function SubCategoryCards({ category, subCategories }) {
  return (
    <div data-theme="valentine" className="py-8 px-4 md:px-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Explore {category.replace("-", " ")} Topics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subCategories.map((sub) => (
          <Link
            key={sub.key}
            to={`/articles/${category}/${sub.key}`}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <figure>
              <img
                src={sub.image || sub.heroImage}
                alt={sub.title}
                className="h-40 w-full object-cover"
              />
            </figure>

            <div className="card-body text-center">
              <h3 className="card-title justify-center text-lg font-bold">
                {sub.title}
              </h3>

              <p className="text-gray-600 text-sm min-h-[3rem]">
                {sub.subtitle || sub.heroSubtitle}
              </p>

              <div className="card-actions justify-center mt-2">
                <span className="btn btn-outline btn-primary btn-sm">
                  View Articles
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
