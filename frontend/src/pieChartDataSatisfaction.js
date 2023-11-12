const pieChartDataSatisfaction = (data) => {
  const length = Object.keys(data).length - 1;
  console.log(data);

  let yes= 0;
  let no = 0;

  for (let e in data) {
    if (data[e].satisfaction === "satisfied") {
      yes += 1;
    } else if (data[e].satisfaction === "dissatisfied") {
      no += 1;
    }
  }

  let percentageYes = (yes / length) * 100;
  let percentageNo = (no / length) * 100;

  const dataPie = [
    { value: percentageYes, label: "Satsified" },
    { value: percentageNo, label: "Dissatisfied" }
  ];

  return dataPie;
};

export default pieChartDataSatisfaction;
