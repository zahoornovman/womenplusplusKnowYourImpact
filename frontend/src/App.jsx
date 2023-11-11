import "./App.css";
import Router from "./routes";
import { useState, useEffect } from "react";
import * as d3 from "d3";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming the CSV file is named 'data.csv' and is in the 'src' folder
        const response = await d3.csv("../src/assets/data.csv");
        setData(response);
      } catch (error) {
        console.error("Error fetching or parsing data", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return <Router />;
}

export default App;
