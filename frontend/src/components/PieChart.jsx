import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 300; // Increase width to accommodate expanded slices
    const height = 300; // Increase height to accommodate expanded slices
    const radius = Math.min(width, height) / 2;

    // Center the pie chart in the SVG container
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.value);
    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const arcs = pie(data);

    // Add tooltips
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    g.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i))
      .on("mouseover", function (event, d) {
        // Animate the slice on mouseover
        d3.select(this)
          .transition()
          .duration(200)
          .attr(
            "d",
            d3
              .arc()
              .outerRadius(radius + 10)
              .innerRadius(0)
          );

        // Show tooltip on mouseover
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`${d.data.label}: ${d.data.value}`)
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY - 28}px`);

        // Highlight the slice
        d3.select(this).attr("opacity", 0.7);
      })
      .on("mouseout", function (event, d) {
        // Animate the slice on mouseout
        d3.select(this).transition().duration(200).attr("d", arc);

        // Hide tooltip on mouseout
        tooltip.transition().duration(500).style("opacity", 0);

        // Reset style
        d3.select(this).attr("opacity", 1);
      });

    // Add labels
    g.selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text((d) => d.data.label);
  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={400}>
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default PieChart;
