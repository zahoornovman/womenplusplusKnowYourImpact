import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const svgRef = useRef();

  const width = 500;
  const height = 300;

  useEffect(() => {
    // D3 code to create the bar chart
    const svg = d3.select(svgRef.current);

    // Define the chart dimensions
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    // Calculate inner dimensions (excluding margins)
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([innerHeight, 0]);

    // Create color scale
    const colorScale = d3
      .scaleSequential(d3.interpolateOranges)
      .domain([0, data.length]);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d.value))
      .attr("fill", (d, i) => colorScale(i));

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const xAxisGroup = svg
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(xAxis);

    const yAxisGroup = svg.append("g").call(yAxis);

    // Style the axis lines
    xAxisGroup.selectAll("path").style("stroke-width", "2");
    yAxisGroup.selectAll("path").style("stroke-width", "4");

    // Add labels
    svg
      .append("text")
      .attr(
        "transform",
        `translate(${innerWidth / 2}, ${innerHeight + margin.top + 20})`
      )
      .style("text-anchor", "middle")
      .text("Education");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - innerHeight / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Percentages");
  }, [data]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default BarChart;
