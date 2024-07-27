// import NavBar from "../components/navbar";
import Articles from "../components/articles";
import Footer from "../components/footer";
import WhoToFollow from "../components/whoToFollow";
import Sections from "../components/sections";
export default function Home() {
  return (
    <>
      <div className="flex flex-row mt-2 gap-x-2">
        <div className="basis-4/4">
          <div class="h-72 flex flex-row bg-white border shadow-sm sm:flex hidden sm:flex">
            <div class="basis-1/3 p-8 mr-2 hidden lg:block">
              <img
                class="size-full  object-cover"
                src="/public/Gen Z-amico.svg"
                alt="Card Image"
              />
            </div>
            <div class="basis-3/3 lg:basis-2/3 flex flex-wrap">
              <div class="p-4 flex flex-col h-full sm:p-7 gap-y-2">
                <h1 class="text-4xl font-bold text-gray-800">Blogs App</h1>
                <p class="w-fit text-3xl mt-1 text-gray-500">
                  Share your knowledge and get a lot of followers , Do you want
                  to upload your here !
                </p>
                <button
                  type="button"
                  class="w-fit py-3 px-8 mt-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  LOGIN IN
                </button>
              </div>
            </div>
          </div>
          <Articles />
        </div>
        <div className="hidden showing basis-1/4 flex flex-col gap-y-2">
          <WhoToFollow />
          <Sections />
        </div>
      </div>
      <Footer />
    </>
  );
}
