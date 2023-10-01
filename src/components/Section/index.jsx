import { Button } from "../Reusable/Button";
import { React } from "react";
import logonfs from "../../assets/images/logonfs.png";
import { Link, BrowserRouter } from "react-router-dom";

const sectionLinks = [
  {
    id: "gym",
    title: "Тренажерный зал",
  },
  {
    id: "martial",
    title: "Единоборства",
  },
  {
    id: "spa_massage",
    title: "SPA и массаж",
  },
  {
    id: "children_fitness",
    title: "Детский фитнес",
  },
  {
    id: "group_fitness",
    title: "Групповые программы",
  },
];

const Section = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-full lg:w-8/12 h-fit my-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 ">
          <div className="row-span-1 ">
            <h1 className="text-white my-3 uppercase text-center lg:text-start text-3xl lg:text-6xl font-bold">
              tmpl fitness
            </h1>
            <div className="uppercase e lg:text-3xl text-center lg:text-start text-tmpl-purple">
              Premium
              <a className="text-tmpl-gray-100  mx-2">фитнес в москве</a>
              <a className="text-white block">БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ</a>
            </div>
          </div>
          <div className=" lg:row-span-2 lg:col-end-7 flex text-end ">
            <ul className=" lg:row-span-2  flex  flex-wrap float-left lg:items-end my-5 mx-10 m-auto  justify-center text-center lg:flex-col gap-3 ">
              {sectionLinks.map((sec, index) => (
                <li className="bg-gradient-to-br  from-tmpl-purple via-purple-900 to-black w-5/12 lg:w-fit p-0.5 rounded">
                  <li
                    key={sec.id}
                    className="flex justify-center items-center w-full  h-12
                   text-white rounded text-center p-8 text-sm lg:text-xl bg-tmpl-gray-150"
                  >
                    <a>{sec.title}</a>
                  </li>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex gap-4 flex-col my-5 xl:my-2 xl:flex-row">
              <Button bg={"tmpl-purple"}> купить абонемент </Button>
              <Button border={"2"} >бесплатное занятие </Button>
            </div>
            <div className="mx-5 lg:mx-0 flex items-center flex-row">
              <img className="w-14 h-14" src={logonfs}></img>
              <div className="text-tmpl-gray-100 text-sm flex flex-col my-3 lg:my-10 mx-3">
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
