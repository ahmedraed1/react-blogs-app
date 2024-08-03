import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Blog() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${parseInt(id) + 1}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTags(data.tags);
      })
      .catch((error) => console.error(error));

    window.scrollTo(0, 0);
  }, [id]);

  let blogTags = tags.map((item, index) => {
    return (
      <button
        key={index}
        class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200"
      >
        {item}
      </button>
    );
  });

  return (
    <>
      <div className="bg-white">
        <main>
          <article>
            <header class="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
              <p class="text-gray-500">Published April 4, 2022</p>
              <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                {data.title}
              </h1>
              <p class="mt-6 text-lg text-gray-700">
                You've come way farther than you expected
              </p>
              <div class="mt-6 flex flex-wrap justify-center gap-2 text-black">
                {blogTags}
              </div>
              <img
                class="-z-10 absolute mt-10 h-96 w-full object-cover max"
                src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </header>

            <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
              {/* <h2 class="text-2xl font-semibold">
                First Steps to Life Betterment
              </h2>
              <blockquote class="max-w-lg border-l-4 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda maiores tempora quod ducimus dolore!
                <span class="whitespace-nowrap text-sm">— Daniel Lehmer</span>
              </blockquote> */}
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                enim maxime sit laudantium! Dolore atque, maxime iusto ut quas
                distinctio reiciendis animi voluptatibus soluta molestias,
                mollitia officiis laboriosam illum earum.
              </p> */}
              <p>{data.body}</p>
            </div>
          </article>
        </main>

        <div class="w-fit mx-auto mt-10 flex space-x-2">
          <div class="h-0.5 w-2 bg-gray-600"></div>
          <div class="h-0.5 w-32 bg-gray-600"></div>
          <div class="h-0.5 w-2 bg-gray-600"></div>
        </div>

        <aside
          aria-label="Recent Posts"
          class="mx-auto mt-10 max-w-screen-xl py-20"
        >
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Most Recent Posts
              </h2>
              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                necessitatibus molestias explicabo.
              </p>
            </div>

            <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
              <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a
                  href="#"
                  class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    loading="lazy"
                    alt=""
                    class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                  />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">April 2, 2022</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                    >
                      The Pines and the Mountains
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint necessitatibus molestias explicabo.
                  </p>

                  <div>
                    <a
                      href="#"
                      class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </article>

              <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a
                  href="#"
                  class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    loading="lazy"
                    alt=""
                    class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                  />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">April 2, 2022</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                    >
                      The Coding Mania
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint necessitatibus molestias explicabo.
                  </p>

                  <div>
                    <a
                      href="#"
                      class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </article>

              <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a
                  href="#"
                  class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    loading="lazy"
                    alt=""
                    class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                  />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">April 2, 2022</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                    >
                      Architectural Warfare
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint necessitatibus molestias explicabo.
                  </p>

                  <div>
                    <a
                      href="#"
                      class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </article>
              <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a
                  href="#"
                  class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                    loading="lazy"
                    alt=""
                    class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                  />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">April 2, 2022</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                    >
                      Blues in Architechture
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint necessitatibus molestias explicabo.
                  </p>

                  <div>
                    <a
                      href="#"
                      class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
