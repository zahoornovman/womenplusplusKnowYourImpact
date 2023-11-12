const pieChartData = (data) => {
  const length = Object.keys(data).length - 1;

  let male = 0;
  let female = 0;

  for (let e in data) {
    if (data[e].Gender === "Female") {
      female += 1;
    } else if (data[e].Gender === "Male") {
      male += 1;
    }
  }

  let percantageFemale = (female / length) * 100;
  let percantageMale = (male / length) * 100;

  const dataPie = [
    { value: percantageFemale, label: "Female" },
    { value: percantageMale, label: "Male" },
  ];

  return dataPie;
};

export default pieChartData;
