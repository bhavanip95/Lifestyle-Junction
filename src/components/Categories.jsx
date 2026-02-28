import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { categoryConfig } from "../config/CategoryConfig";

const categoryEmojis = {
  beauty: { emoji: "💄", gradient: "from-pink-300 to-pink-500" },
  food: { emoji: "🍱", gradient: "from-yellow-300 to-orange-400" },
  family: { emoji: "👨‍👩‍👧", gradient: "from-green-300 to-green-500" },
  wellness: { emoji: "🧘", gradient: "from-blue-300 to-blue-500" },
  home: { emoji: "🏠", gradient: "from-orange-300 to-orange-500" },
  arts: { emoji: "🎨", gradient: "from-purple-300 to-purple-500" },
  finance: { emoji: "💰", gradient: "from-teal-300 to-teal-500" },
  travel: { emoji: "✈️", gradient: "from-rose-300 to-rose-500" },
};

function Categories() {
  return (
    <>
      <Blog />
      <div data-theme="valentine" className="py-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-semibold text-center my-6 py-6">
          Explore Our Categories
        </h2>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {Object.values(categoryConfig).map((category) => {
            const meta = categoryEmojis[category.key] || { emoji: "📌", gradient: "from-gray-300 to-gray-500" };

            return (
              <div
                key={category.key}
                className="break-inside-avoid mb-4 rounded-2xl overflow-hidden shadow-md bg-base-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Banner */}
                <div className={`bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-5xl h-24`}>
                  {meta.emoji}
                </div>

                {/* Body */}
                <div className="p-4">
                  <h3 className="font-bold text-base mb-3">{category.title}</h3>

                  {/* Subcategory chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.subCategories.map((sub) => (
                      <Link
                        key={sub.key}
                        to={`/articles/${category.key}/${sub.key}`}
                        className="badge badge-outline badge-primary text-xs py-3 hover:badge-primary hover:text-white transition-all"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default Categories;