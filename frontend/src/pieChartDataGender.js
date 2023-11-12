const pieChartDataGender = (data) => {
  const length = Object.keys(data).length - 1;


  let male = 0;
  let female = 0;
  let nb = 0;

  for (let e in data) {
    if (data[e].gender === "F") {
      female += 1;
    } else if (data[e].gender === "M") {
      male += 1;
    }
    else{
      nb +=1
    }
  }

  let percantageFemale = (female / length) * 100;
  let percantageMale = (male / length) * 100;
  let percentageNB = (nb/length) * 100;

  const dataPie = [
    { value: percantageFemale, label: "Female" },
    { value: percantageMale, label: "Male" },
    { value: percentageNB, label: "Non-binary"}
  ];

  return dataPie;
};

export default pieChartDataGender;
