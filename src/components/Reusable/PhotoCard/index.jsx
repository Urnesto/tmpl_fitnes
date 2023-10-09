const PhotoCard = (props) => {
  const { img, handler, data } = props;
  return (
    <div className=" lg:w-8/12 lg:h-3/4 lg:mx-4 lg:mt-10 w-full ">
      <div className="w-full  flex items-center z-1 justify-center  ">
        <div className="max-w-xs relative h-full bg-gradient-to-br my-5 from-tmpl-purple via-purple-900 to-black p-0.5 rounded-3xl">
          <div className="">
            <img
              src={img}
              onClick={() => handler(data)}
              alt=""
              className="max-w-xs cursor-pointer rounded-2xl hover:scale-110"
            />
            <div className="">
              <button
                onClick={() => handler(data)}
                className=" w-8 h-8 bg-gradient-to-br bottom-0 right-0 absolute  from-tmpl-purple via-purple-900 to-blackl text-white rounded-3xl font-normal"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
