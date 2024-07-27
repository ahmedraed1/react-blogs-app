export default function Sections() {
  return (
    <>
      <ul class="w-full flex flex-col">
        <li class="cursor-pointer inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px hover:bg-gray-300">
          <div class="flex justify-between w-full font-bold">
            Vue
            <span class="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">
              New
            </span>
          </div>
        </li>
        <li class="cursor-pointer inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px hover:bg-gray-300">
          <div class="flex justify-between w-full font-bold">
            React
            <span class="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">
              +99
            </span>
          </div>
        </li>
        <li class="cursor-pointer inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px hover:bg-gray-300">
          <div class="flex justify-between w-full font-bold">
            Python
            <span class="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">
              15
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
