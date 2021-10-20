// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic


Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },


    xAxis: {
      categories: ['Kiwis','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Jack and Jill\'s house'
      }
    },
    series: [{
      name: 'Jill',
      data: [6, 0, 4, 2]
    }, {
      name: 'Jack',
      data: [6, 7, 3, 0]
    }]
  });
