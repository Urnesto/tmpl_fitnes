import { React } from "react";
import { Image } from "../common/Image";
import secImg from "../../assets/images/secImg.jpg";
import secImg2 from "../../assets/images/secImg2.jpg";
import secImg3 from "../../assets/images/secImg3.jpg";
import secImg4 from "../../assets/images/secImg4.jpg";
import secImg5 from "../../assets/images/secImg5.jpg";
import secImg6 from "../../assets/images/secImg6.jpg";
const ImageSection = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="grid grid-cols-3 max-w-7xl gap-1 lg:gap-8 lg:mx-10 p-2 lg:p-5">
        <div>
          <Image src={secImg} />
        </div>
        <div className=" w-full col-span-2 row-span-2">
          <Image src={secImg4} />
        </div>
        <div>
          <Image src={secImg2} />
        </div>
        <div>
          <Image src={secImg3} />
        </div>
        <div className="col-span-2 row-span-2">
          <Image src={secImg5} />
        </div>
        <div>
          <Image src={secImg6} />
        </div>
      </div>
    </div>
  );
};
export default ImageSection;
