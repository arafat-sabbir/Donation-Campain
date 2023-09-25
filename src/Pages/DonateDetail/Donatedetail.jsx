import { useLoaderData, useParams } from "react-router-dom";

const Donatedetail = () => {
    const donatedData = useLoaderData()
    const {id} = useParams()
    const clickedData = donatedData?.find(donatedOne => donatedOne.id == id)
    const {image,title,description} = clickedData
    return (
        <div className="container mx-auto my-8">
           <div className="flex flex-col items-center  ">
           <img className="w-[80%] h-[600px]  rounded-lg" src={image} alt="" />
           </div>
           <div className="ml-[150px]">
            <h1 className="text-4xl font-bold text-[#0B0B0B] mt-12 mb-6 ">{title}</h1>
            <h3>{description}</h3>
           </div>
        </div>
    );
};

export default Donatedetail;