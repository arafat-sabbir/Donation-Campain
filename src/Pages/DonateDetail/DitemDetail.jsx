import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const DitemDetail = () => {
    const donatedData = useLoaderData()
    const { id } = useParams()
    const clickedData = donatedData?.find(donatedOne => donatedOne.id == id)
    const { image, title, description, price, text_color } = clickedData

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
            <div className="relative lg:w-auto w-[90vw] mx-auto">
                <img className=" w-full rounded-lg" src={image} alt="" />
                <div className="bg-[#0000006e] p-5 lg:p-10 absolute w-full bottom-0 rounded-lg">
                    <button className="py-3.5 px-7 rounded-lg" style={{ background: text_color }} onClick={handleClicked}>
                        Donate ${price}
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center md:w-[90vw] lg:w-auto mx-auto ">
            </div>
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