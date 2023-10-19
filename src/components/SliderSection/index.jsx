import PhotoCard from "../Reusable/PhotoCard";
import leftIcon from "../../assets/icons/leftIcon.svg";
import rightIcon from "../../assets/icons/rightIcon.svg";
const SliderSection = (props) => {
  const { data, btnhandler, sliderhandler } = props;

  return (
    <div className=" flex justify-center items-center   ">
      <div className="lg:w-7/12  w-10/12 h-fit flex justify-center items-center  sm:block ">
        <div className="flex  flex-col items-center justify-center  ">
          <h1 className="text-2xl lg:text-5xl text-gray-600">
            You'll get results{" "}
          </h1>
          <span className="text-2xl lg:text-5xl text-tmpl-purple">
            team of professionals
          </span>
          <p className="text-base lg:text-lg text-gray-600 ml-8">
            Each is an expert in his or her field and has all the necessary
            documents
          </p>
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {data.map((e, index) => (
              <PhotoCard
                key={index}
                id={e.id}
                img={e.img}
                data={e}
                handler={btnhandler}
              />
            ))}
            <button
              className=" w-10 h-10 absolute left-0 top-1/2  "
              onClick={() => sliderhandler()}
            >
              <img src={leftIcon} alt="left"></img>
            </button>
            <button
              className=" w-10 h-10 absolute right-0 top-1/2 "
              onClick={() => sliderhandler("next ", console.log(sliderhandler))}
            >
              <img src={rightIcon} alt="right"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
