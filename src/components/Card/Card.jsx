import { Link } from 'react-router-dom';

const Card = ({ singledata }) => {
    const { image, category_name, title, id, bg_color, text_color, text_bg_color } = singledata
    

    return (
        <div>
            <Link to={`/donationdetail/${id}`}>
                <div  className="card  h-[300px] bg-base-100 shadow-xl rounded-lg" style={{ background: bg_color }}>
                    <figure><img style={{objectFit:'cover'}} src={image} className='w-full h-[230px]' alt="Shoes" /></figure>

                    <div className={`px-4 py-4`}>
                        <h3 style={{ color: text_color }}> <span className='px-2.5 rounded-md font-medium' style={{ backgroundColor: text_bg_color }}>{category_name}</span> </h3>
                        <h3 className='text-xl font-semibold my-3' style={{ color: text_color }}>{title}</h3>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Card;