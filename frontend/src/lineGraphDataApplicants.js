const lineGraphDataApplicants = ({data, data1, data2}) => {
  const length = Object.keys(data).length - 1;
  const length1 = Object.keys(data1).length - 1;
  const length2 = Object.keys(data2).length - 1;

  const dataPie = [
    { year: 2018, number: 600 },
    { year: 2019, number: 800 },
    { year: 2023, number: length2 }
  ];

  return dataPie;
};

export default lineGraphDataApplicants;
