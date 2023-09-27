import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import Banner from "../../components/Header/Banner/banner";
import { useState } from "react";

const Home = () => {
    const Alldata = useLoaderData()
    const [showdata,setShowdata] = useState([]);

    const handlesearchbtn = (e)=>{
     
    }
    const handlesearchvalue = (e)=>{
      console.log('input hitted');
      console.log(e);
    }
    return (
        <div className="">
          <div className="mb-24"><Banner handlesearchvalue={handlesearchvalue} handlesearchbtn={handlesearchbtn} ></Banner></div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 container lg:mx-auto ml-10 md:ml-0  my-12">
          {
            Alldata.map(singledata => <Card key={singledata.id} singledata={singledata}></Card>)
          }
        </div>
        </div>
    );
};

export default Home;