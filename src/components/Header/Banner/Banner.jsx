const Banner = () => {
    return (
        <div>


            <div className="flex h-[70vh] justify-center items-center flex-col">
                <div
                    className="md:w-full h-[70vh] bg-[url('https://i.ibb.co/1zPksDk/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')] bg-cover bg-center">
                    <div className="w-full h-full flex  justify-center items-center  hero-overlay bg-white bg-opacity-90  ">
                        <div className="form-control">
                        <h3 className="font-bold text-xl md:text-3xl  lg:text-5xl mb-10">I Grow By Helping People In Need</h3>
                            <div className="input-group flex justify-center ">
                                <input   type="text" placeholder="Search…" className="input input-bordered lg:w-[470px]  h-[60px]" />
                                <button  className="py-4 px-7 text-white font-semibold bg-[#FF444A]">
                                Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;