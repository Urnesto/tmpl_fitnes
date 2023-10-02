import { React } from "react";
const FreeSection = () => {
  return (
    <div className="flex items-center justify-center mx-5 my-20 ">
      <div className="flex flex-col justify-center lg:justify-start items-center font-light">
        <h1 className="text-tmpl-purple text-center text-4xl">Бесплатное занятие</h1>
        <p className="text-gray-400  text-center text-3xl">подарок от нашего клуба</p>
        <div className="lg:w-8/12 flex flex-col lg:flex-row my-10">
          <div className="w-full lg:w-2/5  flex flex-col pb-4 text-2xl font-normal items-center justify-center my-5 lg:mx-20">
            <span className="text-gray-400 lg:tracking-wide text-center">
              Вы сможете устроить настоящий
            </span>
            <p className="text-tmpl-purple text-center">тест-драйв клуба</p>
          </div>
          <div className="lg:w-1/3 flex flex-col mt-4 items-start space-y-10">
            <div className="flex flex-row lg:flex-col items-center lg:items-start">
              <div className="relative ">
                <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
                <div className="relative flex flex-row justify-center items-center w-32 h-32 z-10">
                  <p className="text-white text-5xl">1</p>
                </div>
              </div>
              <div className="block">
                <span className="text-2xl font-light text-white ">
                  Посмотреть одними из первых клуб внутри
                </span>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col items-center lg:items-start">
              <div className="relative ">
                <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
                <div className="relative flex justify-center items-center w-32 h-32 z-10">
                  <p className="text-white text-5xl">2</p>
                </div>
              </div>
              <div className="block">
                <span className="text-2xl font-light text-white">
                  Позаниматься на новейших тренажерах
                </span>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col items-center lg:items-start">
              <div className="relative ">
                <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
                <div className="relative flex justify-center items-center w-32 h-32 z-10">
                  <p className="text-white text-5xl">3</p>
                </div>
              </div>
              <div>
                <span className="text-2xl font-light text-white ">
                  Насладиться качественным сервисом
                </span>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col items-center lg:items-start">
              <div className="relative ">
                <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
                <div className="relative flex justify-center items-center w-32 h-32 z-10">
                  <p className="text-white text-5xl">4</p>
                </div>
              </div>
              <div>
                <span className="text-2xl font-light text-white ">
                  У вас появится возможность пользоваться {""}
                  <a className="text-tmpl-purple">
                    всеми услугами клуба абсолютно бесплатно
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FreeSection;
