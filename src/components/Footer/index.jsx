import React from "react";
import { Logo } from "../Reusable/logo";
import logonfs from "../../assets/images/logonfs.png";
import { Button } from "../Reusable/Button";
import { Link } from "react-scroll";
import { templLInks } from "../../lib/footerTemplData";
import { adresLinks } from "../../lib/footerAdressData";
import { homeLinks } from "../../lib/footerHomeData";

const Footer = ({ modalHandler }) => {
  return (
    <footer id="contact" className="bg-tmpl-gray-50 ">
      <div className="mx-auto  max-w-screen-xl px-4 pb-6  sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1  lg:grid-cols-3">
          <div>
            <div className="flex flex-row items-center justify-center lg:items-start my-5 lg:justify-normal">
              <Logo size={"w-12 h-12"} />
            </div>
            <div className="flex items-center justify-center  lg:items-start lg:justify-normal">
              <Button
                handler={() => modalHandler("feedback")}
                bg={"tmpl-purple"}
              >
                {" "}
                Left a request{" "}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-left mx-5 lg:mx-0">
              <ul className="space-y-4 text-sm">
                {homeLinks.map((home, index) => (
                  <li key={home.id}>
                    <Link
                      activeClass="active"
                      smooth={true}
                      offset={50}
                      duration={1500}
                      to={home.id}
                    >
                      <p className="text-gray-400 transition cursor-pointer hover:text-white">
                        {home.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left  mx-15 lg:mx-0">
              <ul className="space-y-3  text-sm">
                {adresLinks.map((obj) => (
                  <div key={obj.id}>
                    <p className="text-gray-400 transition hover:text-white">
                      {obj.title}
                    </p>
                    {obj.subAdress && (
                      <ul className="list-disc  text-tmpl-purple list-inside  text-xs">
                        {obj.subAdress.map((adres, adresIndex) => (
                          <li key={adresIndex}>
                            <a
                              href="https://yandex.ru/maps/213/moscow/?ll=37.731599%2C55.662936&mode=poi&poi%5Bpoint%5D=37.731344%2C55.663121&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D91033436195&z=19.52"
                              className="text-gray-400"
                            >
                              {adres}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {obj.phone && (
                      <ul className="list-disc  text-tmpl-purple list-inside  text-">
                        {obj.phone.map((tel, telIndex) => (
                          <li key={telIndex}>{tel}</li>
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
                    <p className="text-gray-400">{templ.title}</p>
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
                href="https://commission.europa.eu/law/law-topic/data-protection/reform/what-constitutes-data-processing_en"
              >
                Privacy Policy
              </a>
              <span>&middot;</span>
              <a className="inline-block text-gray-500 text-xs" href="/">
                The information about services and prices on the website of
                Templ Ltd. is not a public offer. is not a public offer and is
                of an introductory nature
              </a>
            </p>
            <div className="text-gray-400 mt-4 text-sm sm:order-last sm:mt-0 ">
              <p>&copy; 2023 Limited Liability Company Temple</p>
              <p>Lorem ipum</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
