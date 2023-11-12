import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineGraph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {

    console.log(data);

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
      .domain([d3.min(data, (d) => d.year), d3.max(data, (d) => d.year)])
      .range([0, width]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.number)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.year))
      .y((d) => y(d.number));

      const yAxis = d3.axisLeft(y)
      .tickValues(y.year)
      .tickFormat(d3.format('d'))

      const xAxis = d3.axisBottom(x)
      .ticks(6)
      .tickFormat(d3.format('d'))

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
      .text("Years");

    // // Parse the date / time
    // var parseDate = d3.timeParse("%Y");

    // data.forEach(function(d) {
    //   d.date = parseDate(d.year);
    //   d.close = +d.close;
    // });

    // // Define the line
    // var valueline = d3.line()
    // .x(function(d) {
    //     return x(d.date);
    // })
    // .y(function(d) {
    //     return y(d.close);
    // });

    // svg.append("path")
    // .data([data])
    // .attr("class", "line")
    // .attr("d", valueline);

    // Append y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Applications");

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    svg.append("g").call(yAxis);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineGraph;
