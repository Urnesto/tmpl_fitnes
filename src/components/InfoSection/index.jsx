import { Button } from "../Reusable/Button";
import { Link } from "react-scroll";
const InfoSection = ({ modalHandler }) => {
  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <div className=" w-11/12 z-5  lg:w-7/12 h-fit flex items-center flex-col justify-center">
        <div className="bg-gradient-to-br my-14 from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl">
          <div className="w-full h-52 flex flex-col items-center justify-center lg:flex-row lg:justify-around gap-3 rounded-3xl bg-tmpl-black">
            <div className="flex text-center items-center text-white text-cl md:text-2xl lg:text-3xl">
              Зарегистрируетесь на бесплатное занятие
            </div>
            <div className="flex items-center justify-center w-full lg:w-fit mx-5 ">
              <Button handler={() => modalHandler()} bg={"tmpl-purple"}>
                {" "}
                оставить заявку{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br my-14 from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl">
          <div className="w-full h-fit lg:h-52 flex  flex-col p-10 rounded-3xl bg-tmpl-black">
            <div className="flex  flex-col ">
              <h1 className="text-tmpl-purple text-2xl lg:text-5xl">
                Инновационный
              </h1>
              <a className=" text-md lg:text-xl text text-white">
                подход к фитнесу
              </a>
            </div>
            <div className="my-3 text-sm lg:text-md">
              <a className="text-white">Мы предлагаем результат</a>
              <a className="text-gray-400">, а не услуги</a>
            </div>
            <div className="text-gray-400 text-sm lg:text-md">
              В нашем фитнес клубе создаются персонализированные программы
              тренировок индивидуально под каждого клиента
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br  from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl">
          <div className="w-full h-fit  flex  flex-col p-10 rounded-3xl bg-tmpl-black">
            <div className="flex  flex-col ">
              <h1 className="text-gray-400 text-2xl lg:text-5xl">
                Как это работает?
              </h1>
            </div>
            <div className="text-gray-400 my-4 text-md lg:text-md">
              Вы можете приобрести пакет услуг наиболее подходящий под ваш
              желаемый результат, а команда наших специалистов, каждый своей
              направленности, помогут его достичь
            </div>
            <div className="flex items-center lg:items-start justify-center lg:justify-start">
              <Button
                handler={() => console.log("infosection")}
                bg={"tmpl-purple"}
              >
                <Link
                  activeClass="active"
                  smooth={true}
                  offset={50}
                  duration={1500}
                  to={"pricing"}
                >
                  перейти к пакетам{" "}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
