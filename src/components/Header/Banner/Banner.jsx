const Banner = ({handleSubmit}) => {
    return (
        <div>


            <div className="flex h-[50vh] md:h-[70vh]  justify-center items-center flex-col">
                <div
                    className="w-[99vw] h-full bg-[url('https://i.ibb.co/1zPksDk/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')] bg-cover bg-center">
                    <div className="w-full h-full flex  justify-center items-center  hero-overlay bg-white bg-opacity-90  ">
                        <div className="form-control">
                        <h3 className="font-bold text-xl md:text-3xl  lg:text-5xl mb-10">I Grow By Helping People In Need</h3>
                            <div className="input-group flex justify-center ">
                                <form onSubmit={handleSubmit} >
                                <input name="text"  type="text" placeholder="Search…" className="input input-bordered lg:w-[470px]  h-[60px]" />
                                <input  className="py-4 px-7 rounded  text-white font-semibold bg-[#FF444A]" type="submit" value="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;