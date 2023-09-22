import React from "react";
import { Logo } from "../Reusable/logo";
import logonfs from "../../assets/images/logonfs.png";
import { Button } from "../Reusable/Button";

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
const templLInks = [
  { id: "templ", title: "ООО «Тэмпл»" },
  { id: "Tin", title: "ИНН 9726033443" },
  { id: "Ogrn", title: "ОГРН 1227700919863" },
  { id: "Director", title: "Ген. Директор Зайцев Игорь Алексеевич" },
];
const adresLinks = [
  {
    id: "adres",
    title: "Адреса",
    subAdress: [
      "Люблинская 76к4",
      "Каширское шоссе 65к3",
      "Смоленская площадь 3 (4 этаж)",
    ],
  },
  { id: "mobile_app", title: "Мобильное приложение" },
  { id: "contacts", title: "Контакты" },
];
const Footer = () => {
  return (
    <footer className="bg-tmpl-gray-50 ">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex flex-row items-center justify-center lg:items-start lg:justify-normal">
              <Logo size={"w-12 h-12"} />
            </div>
            <Button btnText={"оставить заявку"} bg={"tmpl-purple"} />
          </div>
          <div className="grid grid-cols-1 gap-18 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-left mx-5 lg:mx-0">
              <ul className="space-y-4 text-sm">
                {homeLinks.map((home, index) => (
                  <li key={home.id}>
                    <a className="text-gray-400 transition hover:text-white">
                      {home.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left mx-5 lg:mx-0">
              <ul className="space-y-4 text-sm">
                {adresLinks.map((obj) => (
                  <div key={obj.id}>
                    <a className="text-gray-400 transition hover:text-white">
                      {obj.title}
                    </a>
                    {obj.subAdress && (
                      <ul className="list-disc text-tmpl-purple list-inside text-xs">
                        {obj.subAdress.map((hobby, hobbyIndex) => (
                          <li key={hobbyIndex}>
                            <a className="text-gray-400">{hobby}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>
            </div>
            <div className="text-left mx-5 lg:mx-0">
              <ul className="text-sm">
                {templLInks.map((templ, index) => (
                  <li key={templ.id}>
                    <a className="text-gray-400">{templ.title}</a>
                  </li>
                ))}
              </ul>
              <div className="mx-5 lg:mx-0">
                <img className="w-14 h-14 my-5" src={logonfs}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="sm:flex sm:justify-between text-left">
            <p className="text-sm text-gray-500">
              <a
                className="inline-block text-gray-400 underline transition hover:text-white"
                href="/"
              >
                Политика конфиденциальности
              </a>
              <span>&middot;</span>
              <a className="inline-block text-gray-500 text-xs" href="/">
                Информация об услугах и ценах на сайте ООО «Тэмпл» не является
                публичной офертой и носит ознакомительный характер
              </a>
            </p>
            <div className="text-gray-400 mt-4 text-sm sm:order-last sm:mt-0 ">
              <p>
                &copy; 2023 Общество с ограниченной ответственностью «Тэмпл»
              </p>
              <p>
                Общество с ограниченной ответственностью «Зеленая территория»
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
