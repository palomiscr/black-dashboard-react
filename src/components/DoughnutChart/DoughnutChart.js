import { Doughnut } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardBody,
  } from "reactstrap";
const doughnutData = {
  labels: ["Scored", "Remaining"],
  datasets: [
    {
      data: [80, 20], // Example: 8/10 (80% scored, 20% remaining)
      backgroundColor: ["#00f2c3", "#e2e2e2"], // Using your blue and yellow
      //hoverBackgroundColor: ["#009FE3", "#F9E700"], 
      borderWidth: 0, // Removes the border lines
    },
  ],
};

const doughnutOptions = {
  maintainAspectRatio: false, // To allow custom sizing
  cutout: "70%", // Makes it look like a doughnut with a hole in the middle
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
  },
};

export const UserDashboardDoughnutChart = () => {
    return (
        <div className="row">
        <div className="col-6">
        <div className="chart-area" style={{ height: "204px" }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center text-center">
        <div>
            <h4 className="card-title">
            <i className="tim-icons icon-trophy text-success"></i> 80/100
            </h4>
            <p className="category">Overall Performance Score</p>
        </div>
        </div>
        </div>
    );
  };



