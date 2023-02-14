// Highcharts.chart('graph', {
//   chart: {
//     type: 'areaspline'
//   },
//   title: {
//     text: 'Health Curve',
//     align: 'left'
//   },
//   subtitle: {
//     // text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
//     align: 'left'
//   },
//   legend: {
//     layout: 'vertical',
//     align: 'left',
//     verticalAlign: 'top',
//     x: 120,
//     y: 70,
//     floating: true,
//     borderWidth: 1,
//     backgroundColor:
//       Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
//   },
//   xAxis: {
//     plotBands: [{ // Highlight the two last years
//       from: 2019,
//       to: 2020,
//       color: 'rgba(68, 170, 213, .2)'
//     }]
//   },
//   yAxis: {
//     title: {
//       text: 'Quality'
//     },

//     categories: ['20', '40', '60', '80', '100', '120']

//   },
//   tooltip: {
//     shared: true,
//     headerFormat: '<b>Patient Health Curve {point.x}</b><br>'
//   },
//   credits: {
//     enabled: false
//   },
//   plotOptions: {
//     series: {
//       pointStart: 2000
//     },
//     areaspline: {
//       fillOpacity: 0.5
//     }
//   },
//   series: [{
//     name: 'Barney Cull',
//     data:
//       [
//         22534,
//         23599,
//         24533,
//         25195,
//         25896,
//         27635,
//         29173,
//         32646,
//         35686,
//         37709,
//         39143,
//         36829,
//         35031,
//         36202,
//         35140,
//         33718,
//         37773,
//         42556,
//         43820,
//         46445,
//         50048
//       ]
//   }]
// });



// pie-chart start

Highcharts.chart('pie-chart', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Patient Overview',
    align: 'center',
    // verticalAlign: 'middle',
    // y: 60
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  credits: {
    enabled: false
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -35,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['USA', 40.1],
      ['INDIA', 30.0],
      ['AUSTRALIA', 20.0],
      ['BRAZIL', 10.0],
      // ['Internet Explorer', 1.90],
      {
        name: 'Other',
        y: 3.77,
        dataLabels: {
          enabled: true
        }
      }
    ]
  }]
});

// pie-chart end

// side bar menu start

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const sideBar = document.getElementById('sideBar');

if (bar) {
  bar.addEventListener('click', () => {
    sideBar.classList.add('active')
  })
}

if (close) {
  close.addEventListener('click', () => {
    sideBar.classList.remove('active')
  })
}

// side bar menu end

// table jquery start

$(document).ready(function () {
  $('#myTable').dataTable();
});

// table jquery end


//chart js start

var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var yValues = [34, 40, 38, 45, 53, 50, 80, 80, 90, 92, 108];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(201, 76, 76, 0.3)",
      borderColor: "rgba(0,0,255,0.3)",
      data: yValues,
      pointHoverBorderColor: "red",
      label: 'temp',

    }]
  },
  options: {
    // legend: { display: false },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          font: {
            size: 18
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (^C)',
          font: {
            size: 18
          }
        }
      },
      yAxes: [{
        ticks: { min: 20, max: 120 }
      }]
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Health Curve Chart',
        padding: {
          top: 10,
          bottom: 10
        },
        font: {
          size: 18
        }
      }
    }
  }
});

//chart js end

// doctor profile

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var doctorDetails = document.getElementById("doctor-details");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// doctorDetails.onclick = function () {
function myfunc() {
  modal.style.display = "block";
  result = document.getElementById("doctor-name").getAttribute('value')

  result2 = document.getElementById("doctor-deg").getAttribute('value')
  result3 = document.getElementById("doc-mob").getAttribute('value')
  result4 = document.getElementById("doc-operation").getAttribute('value')
  result5 = document.getElementById("doc-suc").getAttribute('value')
  result6 = document.getElementById("doc-add").getAttribute('value')


  document.getElementById("doctor-card").innerHTML = result
  document.getElementById("doc-deg").innerHTML = result2
  document.getElementById("doc-mobile").innerHTML = result3
  document.getElementById("doc-oper").innerHTML = result4
  document.getElementById("doc-succ").innerHTML = result5
  document.getElementById("doc-address").innerHTML = result6

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}