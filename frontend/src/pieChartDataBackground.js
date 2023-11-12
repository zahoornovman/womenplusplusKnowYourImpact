const pieChartDataBackground = (data) => {
  const length = Object.keys(data).length - 1;
  console.log(data);

  let yes= 0;
  let no = 0;

  for (let e in data) {
    if (data[e]["background in IT"] === "Yes") {
      yes += 1;
    } else if (data[e]["background in IT"] === "No") {
      no += 1;
    }
  }

  let percentageYes = (yes / length) * 100;
  let percentageNo = (no / length) * 100;

  const dataPie = [
    { value: percentageYes, label: "Yes" },
    { value: percentageNo, label: "No" }
  ];

  return dataPie;
};

export default pieChartDataBackground;
