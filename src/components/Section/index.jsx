import { Button } from "../Reusable/Button";
import { React } from "react";
import logonfs from "../../assets/images/logonfs.png";
import { Link, BrowserRouter } from "react-router-dom";

const Section = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-10/12 lg:w-8/12 h-fit my-10">
        <div className="">
          <div className=" ">
            <h1 className="text-white my-3 uppercase text-center lg:text-start text-3xl lg:text-6xl font-bold">
              tmpl fitness
            </h1>
            <div className="uppercase e lg:text-3xl text-center lg:text-start text-tmpl-purple">
              Premium
              <a className="text-tmpl-gray-100  mx-2">фитнес в москве</a>
              <a className="text-white block">БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ</a>
            </div>
          </div>
          text-bas
          <div className=" flex  flex-wrap my-10 justify-center text-center lg:flex-col gap-3 ">
            {/* row-span-2 col-span-2 flex flex-wrap my-10 justify-center text-center lg:flex-col gap-3 */}
            <div className=" flex justify-center item w-5/12 lg:w-fit h-12 text-white bg-red-200">
              <a>Тренажерный зал</a>
            </div>
            <div className=" flex justify-center item w-5/12 lg:w-fit h-12 text-white bg-red-200">
              <a>Тренажерный зал</a>
            </div>
            <div className=" flex justify-center item w-5/12 lg:w-fit h-12 text-white bg-red-200">
              <a>Тренажерный зал</a>
            </div>
            <div className=" flex justify-center item w-5/12 lg:w-fit h-12 text-white bg-red-200">
              <a>Тренажерный зал</a>
            </div>
            <div className=" flex justify-center item w-5/12 lg:w-fit h-12 text-white bg-red-200">
              <a>Тренажерный зал</a>
            </div>
          </div>
          <div className="">
            <div className="flex lg:gap-4 flex-col lg:flex-row">
              <Button btnText={"купить абонемент"} bg={"tmpl-purple"} />
              <Button btnText={"купить абонемент"} border={"2"} />
            </div>
            <div className="mx-5 lg:mx-0 flex items-center flex-row">
              <img className="w-14 h-14" src={logonfs}></img>
              <div className="text-tmpl-gray-100 text-sm flex flex-col  mx-3">
                <a>TMPL Fitness</a>
                <div className="flex flex-row">
                  <a>Вход &nbsp;</a>
                  <div className="underline pointer">
                    <BrowserRouter>
                      <Link to="https://nationalfitness.ru/" target="_blank">
                        Национальное фитнес-сообщество
                      </Link>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
