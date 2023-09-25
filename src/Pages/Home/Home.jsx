import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import Banner from "../../components/Header/Banner/banner";

const Home = () => {
    const Alldata = useLoaderData()
    return (
        <div className="">
          <div className="mb-24"><Banner></Banner></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto my-12">
          {
            Alldata.map(singledata => <Card key={singledata.id} singledata={singledata}></Card>)
          }
        </div>
        </div>
    );
};

export default Home;