import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setArticles(data.posts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-4 bg-white">
        {articles.map((item, index) => {
          return (
            <li
              key={index}
              class="relative flex flex-col sm:flex-row xl:flex-col items-start h-fit"
            >
              <div class="order-1 sm:ml-6 xl:ml-0">
                <h3 class="mb-1  font-semibold">
                  <div>
                    {item.tags.map((item, index) => {
                      return (
                        <span
                          key={index}
                          class=" mb-1 w-fit bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  <span className="blok text-black">{item.title}</span>
                </h3>
                <div class="prose prose-slate prose-sm text-gray-500">
                  <p>
                    Completely unstyled, fully accessible UI components,
                    designed to integrate beautifully with Tailwind CSS.
                  </p>
                </div>
                <Link
                  to={`/blog/${index}`}
                  class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                >
                  Learn more
                  <svg
                    class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3"
                    height="6"
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M0 0L3 3L0 6"></path>
                  </svg>
                </Link>
              </div>
              <img
                src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
                alt=""
                class="mb-6 shadow-md bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                width="1216"
                height="640"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
