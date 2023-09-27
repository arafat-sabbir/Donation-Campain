import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import Banner from "../../components/Header/Banner/banner";
import { useEffect, useState } from "react";

const Home = () => {
    const Alldata = useLoaderData()
    const [showdata,setShowdata] = useState([]);

 
    const handleSubmit = (e)=>{
      e.preventDefault()
      
      const searchText = e.target.text.value.toLowerCase().trim()
      console.log(searchText);
      const filteredCards = Alldata.filter(card => card.category_name.toLowerCase().indexOf(searchText) != -1);
      setShowdata(filteredCards)
    }
    useEffect(()=>{
      setShowdata(Alldata)
    },[])
    return (
        <div className="">
          <div className="mb-24"><Banner handleSubmit={handleSubmit}></Banner></div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 container  mx-auto  my-12 w-[90%] lg:w-[100%] ">
          {
            showdata.map(singledata => <Card key={singledata.id} singledata={singledata}></Card>)
          }
        </div>
        </div>
    );
};

export default Home;