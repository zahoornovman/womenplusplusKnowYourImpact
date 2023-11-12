import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { x: 0, y: 10 },
      { x: 1, y: 20 },
      { x: 2, y: 15 },
      { x: 3, y: 25 },
      { x: 4, y: 10 },
    ];

    const margin = { top: 20, right: 20, bottom: 50, left: 50 }; // Increased bottom margin for axis labels
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "lightgray");

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.x)])
      .range([0, width]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", line)
      .style("fill", "none")
      .style("stroke", "blue");

    // Append x-axis label
    svg
      .append("text")
      .attr("transform", `translate(${width / 2},${height + margin.top + 20})`)
      .style("text-anchor", "middle")
      .text("X Axis Label");

    // Append y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Y Axis Label");

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default LineGraph;
