import closeIcon from "../../../assets/icons/closeIcon.svg";
const InfoModal = (props) => {
  const { data, handler } = props;
  return (
    <div className="fixed overflow-x-auto lg:overflow-hidden inset-0 z-10 w-screen h-screen  bg-black backdrop-blur-sm ">
      <div className=" flex my-10 w-8/10 md:my-10 lg:m-20 justify-center rounded-3xl w-screen h-screen">
        <div className="flex w-full lg:w-8/12 h-3/5 flex-col items-center lg:item-start lg:flex-row">
          <img
            src={data.img}
            alt=""
            className="lg:my-5 my-8 w-9/12 md:w-7/12 lg:w-80 bg-gradient-to-br from-tmpl-purple via-purple-900 to-black p-0.5 rounded-3xl"
          />
          <div className="flex flex-col m-10 text-white ">
            <h1 className="text-white text-2xl">{data.name}</h1>
            <h3 className="text-white my-3">{data.experience}</h3>
            <div className="flex flex-col pt-4">
              <p className="text-xl mb-3">Специализация</p>
              {data.specialization.map((spec, index) => (
                <li className="list-disc  text-tmpl-purple list-inside">
                  <span className="text-sm md:text-base lg:text-lg text-gray-400">
                    {spec}
                  </span>
                </li>
              ))}
              <p className="text-xl my-3">Достижения</p>
              {data.achievements.map((ach, index) => (
                <li className="list-disc text-tmpl-purple list-inside">
                  <span className="text-sm md:text-base lg:text-lg text-gray-400">
                    {ach}
                  </span>
                </li>
              ))}
              <p className="text-xl my-3">Образование</p>
              {data.education.map((edu, index) => (
                <li className="list-disc text-tmpl-purple list-inside">
                  <span className="text-sm md:text-base lg:text-lg text-gray-400">
                    {edu}
                  </span>
                </li>
              ))}
            </div>
          </div>
          <div className="absolute top-0 text-xs right-0 p-4 lg:m-5">
            <button onClick={() => handler()} className="">
              <img
                src={closeIcon}
                className="lg:w-10 lg:h-10 w-6 h-6 hover:scale-110"
                alt="close"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
