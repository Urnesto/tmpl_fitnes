import React from "react";

const homeLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "about",
    title: "O фитнес клубе",
  },
  {
    id: "product",
    title: "Услуги",
  },
  {
    id: "package_services",
    title: "Пакетные услуги",
  },
  {
    id: "schedule",
    title: "Расписание",
  },
  {
    id: "pricing",
    title: "Стоимость",
  },
];

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p>Logo</p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">About Us</p>
              <ul class="mt-8 space-y-4 text-sm">
                {homeLinks.map((home, index) => (
                  <li key={home.id}>
                    <a class="text-gray-700 transition hover:text-gray-700/75">
                      {home.title}
                    </a>
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-100 pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="text-sm text-gray-500">
              <span class="block sm:inline">All rights reserved.</span>

              <a
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </a>
              <span>&middot;</span>
              <a
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </a>
            </p>
            <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2022 Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
