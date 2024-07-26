// import NavBar from "../components/navbar";
export default function Home() {
  return (
    <>
      <div className="flex flex-row mt-2">
        <div className="basis-3/4">
          <div class="h-72 flex flex-row bg-white border rounded-xl shadow-sm sm:flex ">
            <div class="basis-1/3 p-8 mr-2 sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
              <img
                class="size-full  object-cover"
                src="/public/Gen Z-amico.svg"
                alt="Card Image"
              />
            </div>
            <div class="basis-2/3 flex flex-wrap">
              <div class="p-4 flex flex-col h-full sm:p-7">
                <h1 class="text-4xl font-bold text-gray-800">Blogs App</h1>
                <p class="text-3xl mt-1 text-gray-500">
                  Share your knowledge and get a lot of followers , Do you want
                  to upload your here !
                </p>
                <a className="text-blue-600 text-xl my-4 uppercase underline">
                  ✨ Login In ✨
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
    </>
  );
}
