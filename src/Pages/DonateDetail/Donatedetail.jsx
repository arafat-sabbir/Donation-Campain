import { useLoaderData, useParams } from "react-router-dom";

const Donatedetail = () => {
    const donatedData = useLoaderData()
    const {id} = useParams()
    const clickedData = donatedData?.find(donatedOne => donatedOne.id == id)
    const {image,title,description,price} = clickedData

    const handleClicked = () => {
        const donated = []
        const donatedOne = JSON.parse(localStorage.getItem('donateditem'))
        if (!donatedOne) {
            donated.push(clickedData)
            localStorage.setItem('donateditem', JSON.stringify(donated))
        } else {
            const isExist = donatedOne.find(item => item.title == title)
            if (isExist) {
               return;
            } else {
                donated.push(...donatedOne, clickedData)
                localStorage.setItem('donateditem', JSON.stringify(donated))
            }

        }
    }
    return (
        <div className="container mx-auto my-8">
           <div className="flex flex-col items-center  ">
           <img className="w-[80%] h-[600px]  rounded-lg relative " src={image} alt="" />
           <button className=" absolute left-[360px] bottom-60 text-white py-3.5 px-7 bg-[#FF444A] rounded-lg" onClick={handleClicked}>Donate ${price}</button>
           </div>
           <div className="ml-[150px]">
            <h1 className="text-4xl font-bold text-[#0B0B0B] mt-12 mb-6 ">{title}</h1>
            <h3>{description}</h3>
            
           </div>
        </div>
    );
};

export default Donatedetail;