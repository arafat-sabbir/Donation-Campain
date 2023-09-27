import { useEffect, useState } from "react";
import Ditem from "../Donateditem/Ditem";

const Donation = () => {
    const [display, setDisplay] = useState(4)
    const [nodonated, setNodonated] = useState('')
    const items = JSON.parse(localStorage.getItem('donateditem'))
    useEffect(() => {
        if (items) {
            setNodonated(true)
        } else {
            setNodonated(false)
        }
    }, [items])
    return (
        <div>
            <div className={nodonated ? 'grid lg:grid-cols-2 container  md:my-12 lg:my-0 gap-6 md:w-[90%] mx-auto' : ''}>
                {
                    nodonated ? items.slice(0, display).map(item => <Ditem key={item.id} item={item} ></Ditem>) : <div>
                        <h3 className="h-[60vh] font-bold text-3xl flex  justify-center items-center ">No donated Item Found</h3>
                    </div>

                }


            </div>
            {
                items?.length?<div className={display === items?.length ||  items?.length <4  ? 'hidden' : 'flex justify-center items-center my-8'}>
                <button className="btn btn-accent text-white " onClick={() => setDisplay(items?.length)} >Show All </button>
            </div>:''
            }
        </div>
    );
};

export default Donation;