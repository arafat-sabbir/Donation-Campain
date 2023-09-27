import { useState } from "react";
import { Link } from "react-router-dom";

const Ditem = ({ item }) => {
    const { image, category_name, title,id,bg_color,text_color,text_bg_color,price } = item
    return (
        <div>
           {
           <div className="card md:card-side bg-base-100 shadow-xl w-[90vw] lg:w-auto  md:w-[90vw] mx-auto" style={{background:bg_color}}>
            <figure><img src={item.image} className="md:w-[330px] md:h-[230px]" alt="Movie" /></figure>
            <div className="card-body">
            <h3 style={{ color:text_color}}> <span className='px-2.5 rounded-md font-medium' style={{backgroundColor:text_bg_color}}>{category_name}</span> </h3>
                <p className="text-[#0B0B0B] font-semibold md:text-xl" >{title}</p>
                <h3 style={{color:text_color}} className="mb-4 font-semibold">${price}.00</h3>
                <Link to={`/donationdetail/${id}`} className="card-actions">
                    <button style={{background:text_color}} className="btn text-white">Show Details</button>
                </Link>
            </div>
        </div>
           }
        </div>
    );
};

export default Ditem;