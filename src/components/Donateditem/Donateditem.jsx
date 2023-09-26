import { useState } from "react";
import { Link } from "react-router-dom";

const Donateditem = ({ item }) => {
    const { image, category_name, title,id,bg_color,text_color,text_bg_color,price } = item
    return (
        <div>
           {
           <div className="card card-side bg-base-100 shadow-xl w-[748px]" style={{background:bg_color}}>
            <figure><img src={item.image} className="w-[330px] h-[230px]" alt="Movie" /></figure>
            <div className="card-body">
            <h3 style={{ color:text_color}}> <span className='px-2.5 rounded-md font-medium' style={{backgroundColor:text_bg_color}}>{category_name}</span> </h3>
                <p className="text-[#0B0B0B] font-semibold text-xl" >{title}</p>
                <h3 style={{color:text_color}} className="mb-4 font-semibold">${price}.00</h3>
                <Link to={`/home/${id}`} className="card-actions">
                    <button style={{background:text_color}} className="btn text-white">Show Details</button>
                </Link>
            </div>
        </div>
           }
        </div>
    );
};

export default Donateditem;