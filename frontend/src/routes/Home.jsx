import Histogram from "../components/Histogram";
import PieChartGender from "../components/PieChartGender";
import { useState, useEffect } from "react";
import * as d3 from "d3";
import pieChartData from "../pieChartData";
import LineGraph from "../components/LineGraph";
import ScatterPlot from "../components/ScatterPlot";

export default function Home() {
  const [data, setData] = useState(null);

  const dataLineChart = [10, 20, 30, 40, 50, 40, 30, 20, 10];

  const [dataCSV, setDataCsv] = useState(null);
  const [dataPie, setdataPie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming the CSV file is named 'data.csv' and is in the 'src' folder
        const response = await d3.csv("../src/assets/Data_Participants.csv");
        setDataCsv(response);
        setdataPie(pieChartData(response));
      } catch (error) {
        console.error("Error fetching or parsing data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Histogram />
      <PieChartGender data={dataPie} />
      <LineGraph />
      <ScatterPlot />
    </>
  );
}
