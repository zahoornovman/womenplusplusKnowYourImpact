import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Histogram = () => {
  const svgRef = useRef();

  let width = 400;
  let height = 200;
  const data = [1, 2, 3, 4, 5, 2, 3, 4, 1, 5, 5, 3, 2, 4, 4];

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

    // Create a histogram generator
    const histogram = d3
      .histogram()
      .value((d) => d)
      .domain(d3.extent(data))
      .thresholds(d3.range(d3.min(data), d3.max(data), 1));

    // Generate histogram bins
    const bins = histogram(data);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([0, width - 60]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(bins, (d) => d.length)])
      .range([height - 60, 0]);

    // Draw bars
    svg
      .selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.x0))
      .attr("y", (d) => yScale(d.length))
      .attr("width", (d) => xScale(d.x1) - xScale(d.x0) - 1)
      .attr("height", (d) => height - 60 - yScale(d.length))
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

export default Histogram;
