const barChartData = (data) => {
  let underGraduate = 0;
  let phd = 0;
  let masters = 0;
  let unknown = 0;

  for (let e in data) {
    if (data[e].education === "Undergraduate") {
      underGraduate += 1;
    } else if (data[e].education === "Prefer not to say") {
      unknown += 1;
    } else if (data[e].education === "PhD") {
      phd += 1;
    } else if (data[e].education === "Masters degree") {
      masters += 1;
    }
  }

  let barChartNumbers = [
    { label: "Undergraduates", value: underGraduate },
    { label: "Masters", value: masters },
    { label: "PhDs", value: phd },
    { label: "unknown", value: unknown },
    // Add more data points as needed
  ];

  return barChartNumbers;
};

export default barChartData;
