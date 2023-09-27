import { Chart } from "react-google-charts";


const data = JSON.parse(localStorage.getItem('donated'))




const Piecharts = () => {
    return (
        <div>
            <Chart
      chartType="PieChart"
      data={data}
      width={"200%"}
      height={"400px"}
    />
        </div>
    );
};

export default Piecharts;