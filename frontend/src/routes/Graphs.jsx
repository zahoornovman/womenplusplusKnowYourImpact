import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import { useState, useEffect } from "react";
import * as d3 from "d3";
import pieChartDataGender from "../pieChartDataGender";
import pieChartDataBackground from "../pieChartDataBackground";
import pieChartDataSatisfaction from "../pieChartDataSatisfaction";
import LineGraph from "../components/LineGraph";
import ScatterPlot from "../components/ScatterPlot";
import lineGraphDataApplicants from "../lineGraphDataApplicants";

import "./graphs.scss";
import barChartData from "../educationData";

export default function Graphs() {
  const dataLineChart = [10, 20, 30, 40, 50, 40, 30, 20, 10];

  const [dataCSV, setDataCsv] = useState(null);
  const [genderData, setGenderDataPie] = useState({});
  const [backgroundData, setBackgroundDataPie] = useState({});
  const [satisfactionData, setSatisfactionDataPie] = useState({});
  const [educationData, setEducationData] = useState({});

  const data = [
    { label: "A", value: 20 },
    { label: "B", value: 50 },
    { label: "C", value: 30 },
    // Add more data points as needed
  ];
  const [applicantsData, setAppliedDataLine] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming the CSV file is named 'data.csv' and is in the 'src' folder
        const response = await d3.csv(
          "../src/assets/data_participants_2023_2.csv"
        );
        const response1 = await d3.csv(
          "../src/assets/data_participants_2019_2.csv"
        );
        const response2 = await d3.csv(
          "../src/assets/data_participants_2018_2.csv"
        );
        setGenderDataPie(pieChartDataGender(response));
        setBackgroundDataPie(pieChartDataBackground(response));
        setSatisfactionDataPie(pieChartDataSatisfaction(response));
        setAppliedDataLine(
          lineGraphDataApplicants({
            data: response,
            data1: response1,
            data2: response2,
          })
        );
      } catch (error) {
        console.error("Error fetching or parsing data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="graphs-main">
      <div className="bar-chart">
        <BarChart data={educationData} />
      </div>
      <PieChart data={genderData} />
      <PieChart data={backgroundData} />
      <PieChart data={satisfactionData} />
      <LineGraph data={applicantsData} />
      <ScatterPlot />
    </div>
  );
}
