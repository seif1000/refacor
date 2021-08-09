var data = [
  {
    "Cheese": 22.2,
    "CHOCOLATE": 10.3,
    "Impulse": 1.5,
    "period": "2021_26"
  },
  {
    "Cheese": 21.8,
    "CHOCOLATE": 9.8,
    "Impulse": 1.5,
    "period": "2021_27"
  },
  {
    "Cheese": 21.2,
    "CHOCOLATE": 9.7,
    "Impulse": 1.4,
    "period": "2021_28"
  }
];

function generateGraph() {
  const dataWithTotal = [...data]

  dataWithTotal.forEach((item,index)=>{
        let total = (item.Cheese+item.CHOCOLATE+item.Impulse)/3
        item.total=total
  })
  var labels = [];

  for (var i = 0; i < dataWithTotal.length; i++) {
    labels.push(dataWithTotal[i]['period']);
  }

  var graphValues = [];
  var keys = Object.keys(dataWithTotal[0]).filter(item=>item!=='period');

  var graphValues = keys.map((item,index)=>{
    var temp = {
      label: item, 
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ], 
    };
    for (var n = 0; n < dataWithTotal.length; n++) {
      temp.data.push(dataWithTotal[n][item])
    }
    return temp
  })
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: graphValues
    }
  });

}

generateGraph();



