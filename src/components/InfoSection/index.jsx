import { Button } from "../Reusable/Button";
import { Link } from "react-scroll";
const InfoSection = ({ modalHandler }) => {
  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <div className=" w-11/12 z-5  lg:w-7/12 h-fit flex items-center flex-col justify-center">
        <div className="bg-gradient-to-br my-14 from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl">
          <div className="w-full h-52 flex flex-col items-center justify-center lg:flex-row lg:justify-around gap-3 rounded-3xl bg-tmpl-black">
            <div className="flex text-center items-center text-white text-cl md:text-2xl lg:text-3xl">
              Register for a free class
            </div>
            <div className="flex items-center justify-center w-full lg:w-fit mx-5 ">
              <Button
                handler={() => modalHandler("feedback")}
                bg={"tmpl-purple"}
              >
                {" "}
                Left a request{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br my-14 from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl">
          <div className="w-full h-fit lg:h-52 flex  flex-col p-10 rounded-3xl bg-tmpl-black">
            <div className="flex  flex-col ">
              <h1 className="text-tmpl-purple text-2xl lg:text-5xl">
                Innovative
              </h1>
              <p className=" text-md lg:text-xl text text-white">
                fitness approach
              </p>
            </div>
            <div className="my-3 text-sm lg:text-md">
              <a className="text-white">We offer results</a>
              <a className="text-gray-400">, not services</a>
            </div>
            <div className="text-gray-400 text-sm lg:text-md">
              In our fitness club we create personalised training programmes
              individualised training programmes for each client
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br  from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl">
          <div className="w-full h-fit  flex  flex-col p-10 rounded-3xl bg-tmpl-black">
            <div className="flex  flex-col ">
              <h1 className="text-gray-400 text-2xl lg:text-5xl">
                How it works?
              </h1>
            </div>
            <div className="text-gray-400 my-4 text-md lg:text-md">
              You can purchase a package of services that best suits your
              desired result. desired result, and a team of our specialists,
              each with their own will help you achieve it
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
                  go to packages{" "}
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
