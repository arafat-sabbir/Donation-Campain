import { useState } from "react";
import Donateditem from "../Donateditem/Donateditem";

const Donation = () => {
    const [loaclitem,setLocalitem] = useState([])

    const items = JSON.parse(localStorage.getItem('donateditem'))
    setLocalitem(items)
    console.log(items);
    return (
        <div className="grid grid-cols-2 grid-rows-2 container mx-auto gap-6">
           {
            loaclitem.map(item => <Donateditem key={item.id} item={item}></Donateditem>)
           }
        </div>
    );
};

export default Donation;