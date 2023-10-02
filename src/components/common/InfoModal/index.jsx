import { Button } from "../../Reusable/Button"


const InfoModal = (props) => {
  
  const {data, handler} = props
    console.log(data)


    return(
        <div  className='fixed inset-0 w-screen h-screen  bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center'>
        <div className="  flex item-center lg:items-start justify-center lg:justify-start rounded-3xl w-screen h-screen">
            <div className="flex w-8/12 h-7/12 items-center lg:item-start flex-col lg:flex-row">
              <img src={data.img} alt="" className="lg:my-5 my-8 w-10/12 lg:w-80 bg-gradient-to-br from-tmpl-purple via-purple-900 to-black p-0.5 rounded-3xl" />
                <div className="flex flex-col items-center  text-white">
                <h1 className="text-white text-center mt-8">
                   {data.name}
                </h1>
                <div className="flex flex-col pt-4">
                {data.specialization.map((spec, index) => (
                    <span className="text-white">{spec}</span>
          ))}
                </div>
                </div>
               <Button bg="tmpl-purple" handler={handler}> Close </Button>
              </div>
        </div>
      </div>
    )
}

export default InfoModal