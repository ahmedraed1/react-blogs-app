export default function Sitting() {
  return (
    <>
      <aside class="flex flex-col w-64 aside-hight px-5 py-2 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l border-t">
        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav class="-mx-3 space-y-6 ">
            <h2 class="px-3 text-gray-500 text-2xl">Sitting</h2>
            <div class="w-full text-sm font-medium text-gray-900 bg-white">
              <a
                href="#"
                // aria-current="true"
                class="block w-full px-4 py-2 text-black hover:bg-gray-50 border-b border-gray-200  cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#"
                // aria-current="true"
                class="block w-full px-4 py-2 text-black hover:bg-gray-50 border-b border-gray-200  cursor-pointer"
              >
                Password
              </a>
              <a
                href="#"
                // aria-current="true"
                class="block w-full px-4 py-2 text-black hover:bg-gray-50 border-b border-gray-200  cursor-pointer"
              >
                Email
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
