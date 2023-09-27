import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const DitemDetail = () => {
    const donatedData = useLoaderData()
    const { id } = useParams()
    const clickedData = donatedData?.find(donatedOne => donatedOne.id == id)
    const { image, title, description, price,text_color } = clickedData

    const handleClicked = () => {

        const donated = []
        const donatedOne = JSON.parse(localStorage.getItem('donateditem'))
        if (!donatedOne) {
            donated.push(clickedData)
            localStorage.setItem('donateditem', JSON.stringify(donated))
            swal("Great!", "Donated Successfully!", "success");
        } else {
            const isExist = donatedOne.find(item => item.id == id)
            if (isExist) {
                return swal("Already donated!", "You clicked the button!", "error");
            } else {
                donated.push(...donatedOne, clickedData)
                localStorage.setItem('donateditem', JSON.stringify(donated))
                swal("Great!", "Donated Successfully!", "success");
            }

        }
    }
    return (
        <div className="container mx-auto my-8">
            <div className="flex flex-col items-center  ">
                <img className="  w-[80%] h-[600px]  rounded-lg relative " src={image} alt="" />
                <button style={{background:text_color}} className=" absolute left-[360px] bottom-60 text-white py-3.5 px-7 z-50  rounded-lg" onClick={handleClicked}>Donate ${price}</button>
            </div>
            <div className="hero-overlay bg-opacity-100 w-[1230px] ml-[153px] bottom-[209px] rounded-lg absolute h-[11vh] bg-[#0B0B0B7F] z-0"></div>
            <div className="ml-[150px]">
                <h1 className="text-4xl font-bold text-[#0B0B0B] mt-12 mb-6 ">{title}</h1>
                <h3>{description}</h3>
                <Link to={'/donation'}>
                    <button style={{background:text_color}} className=" text-white py-3.5 px-7 flex justify-center items-center my-4 rounded-lg">See Donation</button>
            </Link>
            </div>
            
        </div>



    );
};

export default DitemDetail;