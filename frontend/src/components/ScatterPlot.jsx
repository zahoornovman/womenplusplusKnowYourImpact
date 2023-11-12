import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const ScatterPlot = () => {
  const svgRef = useRef();

  const [data, setdata] = useState([
    { x: 1, y: 5 },
    { x: 2, y: 7 },
    { x: 3, y: 8 },
    { x: 4, y: 4 },
    { x: 5, y: 10 },
    { x: 6, y: 3 },
    // Add more data points as needed
  ]);

  const width = 400;
  const height = 200;

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up the SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(30,30)`); // Adjust margins

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.x), d3.max(data, (d) => d.x)])
      .range([0, width - 60]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.y), d3.max(data, (d) => d.y)])
      .range([height - 60, 0]);

    // Draw circles (scatter plot points)
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 5)
      .attr("fill", "steelblue");

    // Draw axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - 60})`)
      .call(xAxis);

    svg.append("g").call(yAxis);
  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default ScatterPlot;
