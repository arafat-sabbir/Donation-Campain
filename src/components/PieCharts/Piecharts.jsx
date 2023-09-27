
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Piecharts = () => {

    const options = {
        legend: {
            position: 'bottom',
            alignment: 'middle',
            textStyle: {
                fontSize: 16
            },
        },
        sliceVisibilityThreshold:0,
        slices: { 0: { color: '#00C49F' }, 1: { color: '#FF444A' } }
    };

    const [myDonation, setMYDonation] = useState(0)

    const data = [
        ["Task", ""],
        ["My Donation", myDonation],
        ["Total Donation", 12 - myDonation],
    ];

    useEffect(() => {
        const lc = JSON.parse(localStorage.getItem('donateditem'))
        if (lc !== null) {
            setMYDonation(lc.length)
        }
    }, [])

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"90vw"}
                height={"500px"}
            />
        </div>
    );
};

export default Piecharts;