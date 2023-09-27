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
              <div className="flex flex-col items-center md:w-[90vw] lg:w-auto mx-auto ">
                <img className=" w-[90vw] lg:w-[1230px] md:w-[90vw] md:h-[700px]  rounded-lg md:relative " src={image} alt="" />
                <button style={{ background: text_color }} className=" my-4 lg:my-0 lg:absolute lg:left-[360px] md:-bottom-[85px] md:left-12 lg:bottom-[110px] bottom-2 left-24 text-white py-3.5 px-7 z-50  rounded-lg" onClick={handleClicked}>Donate ${price}</button>
            </div>
            <div className="hero-overlay hidden lg:block  bg-opacity-100 lg:w-[1230px] w-[90vw] mx-auto md:left-10 lg:left-[185px] -bottom-[105px] lg:ml-[153px] lg:bottom-[85px] rounded-lg absolute h-[11vh] bg-[#0B0B0B7F] z-0"></div>
            <div className="lg:ml-[150px] w-[90vw] mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mt-12 mb-6 ">{title}</h1>
                <h3 className="w-[90vw] md:w-[66vw]">{description}</h3>
                <div className="flex gap-6 items-center">
                <Link to={'/donation'}>
                    <button style={{ background: text_color }} className=" text-white py-3.5 px-7  my-4 rounded-lg">See Donation</button>
                </Link>
                <p className="text-2xl font-semibold">Or</p>
                <Link to={'/'}>
                    <button className=" text-white py-3.5 px-7  my-4 rounded-lg" style={{ background: text_color }} >Go Home</button>
                </Link>

                </div>
            </div>
        </div>



    );
};

export default DitemDetail;