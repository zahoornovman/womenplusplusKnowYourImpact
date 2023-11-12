import Histogram from "../components/BarChart";
// import PieChartGender from "../components/PieChartGender";
import { useState, useEffect } from "react";
import * as d3 from "d3";
// import pieChartData from "../pieChartData";
// import LineGraph from "../components/LineGraph";
// import ScatterPlot from "../components/ScatterPlot";
import meeting_img from "../assets/meeting.jpeg";
import volunteers from "../assets/volunteers.jpeg";
import { useNavigate } from "react-router-dom";

import "./home.scss";

export default function Home() {
  const [data, setData] = useState(null);

  const dataLineChart = [10, 20, 30, 40, 50, 40, 30, 20, 10];

  const [dataCSV, setDataCsv] = useState(null);
  const [dataPie, setdataPie] = useState({});

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Assuming the CSV file is named 'data.csv' and is in the 'src' folder
  //       const response = await d3.csv("../src/assets/Data_Participants.csv");
  //       setDataCsv(response);
  //       setdataPie(pieChartData(response));
  //     } catch (error) {
  //       console.error("Error fetching or parsing data", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleButtonClick = () => {
    // Redirect to a different page (e.g., '/new-page')
    console.log("pushed");
    navigate("/women++");
  };

  return (
    <div className="home">
      <div className="home-first-section">
        <div className="home-first-section-left">
          <img src={meeting_img}></img>
        </div>
        <div className="home-first-section-right">
          <div className="single-div">
            <div className="home-first-section-right-heading">
              Measuring Impact of Non-Profit Organisation{" "}
            </div>
            <div className="home-first-section-right-description">
              With our dashboards we promote transparency in the sector of
              equality, inclusion, and diversity.
            </div>
            <div className="form">
              <div>
                <input></input>
              </div>
              <button onClick={handleButtonClick}>Search a Non-Profit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-second-section">
        <div className="home-second-section-left">
          <div className="home-second-section-left-heading">
            How do we measure social good?
          </div>
          <div className="home-second-section-left-description">
            Our criteria for measuring impact are based on extensive research{" "}
          </div>
          <div className="buttons">
            <button className="impact-button">Impact Points</button>
            <button className="case-study-button">Case Studies</button>
          </div>
        </div>
        <div className="home-second-section-right">
          <img src={volunteers}></img>
        </div>
      </div>
      <div className="home-third-section"></div>
      <div className="home-fourth-section"></div>
    </div>
  );
}
