import { useEffect, useState } from "react";
import Donateditem from "../Donateditem/Donateditem";

const Donation = () => {

    const [nodonated,setNodonated] =useState('')
    const items = JSON.parse(localStorage.getItem('donateditem'))
    useEffect(()=>{
    if(items){
        setNodonated(true)
    }else{
        setNodonated(false)
    }
    },[items])
    return (
        <div className={nodonated ?'grid grid-cols-2 grid-rows-2 container mx-auto gap-6':''}>
         {
            nodonated ? items.map(item => <Donateditem  key={item.id} item={item} ></Donateditem>):<div>
                <h3 className="h-[60vh] font-bold text-3xl flex  justify-center items-center ">No donated Item Found</h3>
            </div>
             
         }
        </div>
    );
};

export default Donation;