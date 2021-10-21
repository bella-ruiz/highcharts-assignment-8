//chart one!

Highcharts.chart('container', {

  chart: {
    type: 'column'
  },

  title: {
    text: 'Marital Status of the Population 15 Years Old and over by sex from 2010-2020'
  },

  xAxis: {
    categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: 'Total (in thousands)'
    }
  },

  tooltip: {
    formatter: function() {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        'Total: ' + this.point.stackTotal + '<br/>' +
         'Percentage: ' + ((this.y)/(this.point.stackTotal)*100).toFixed(2) + '%';
    }
  },

  plotOptions: {
    column: {
      stacking: 'normal'
    }
  },

  series: [{
    name: 'Married (m)',
    data: [64525, 64381, 64995, 65281, 65369, 65853, 66347, 67667, 67976, 68504, 68431],
    stack: 'male'
  }, {
    name: 'Not married (m)',
    data: [53161, 54446, 54595, 55698, 56499, 57274, 58256, 57993, 59257, 59399, 60104],
    stack: 'male'
  }, {
    name: 'Married (f)',
    data: [65197, 65000, 66049, 66287, 66732, 67217, 67450, 68082, 68530, 69254, 69341],
    stack: 'female'
  }, {
    name: 'Not married (f)',
    data: [59165, 60031, 61646, 62538, 63139, 64179, 65213, 65320, 66294, 66300, 66821],
    stack: 'female'
  }]
});


//chart 2!

Highcharts.chart('container1', {

  title: {
    text: 'Poverty Status of Families by Type of Family <br> 2010-2020'
  },


  yAxis: {
    title: {
      text: 'Percentage below poverty line'
    }
  },

  xAxis: {
    categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  },

  tooltip: {
    formatter: function() {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y  +'% are below poverty line' + '<br/>' ;
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Married couples',
    data: [6.3, 6.2, 6.3, 5.8, 6.2, 5.4, 5.1, 4.9, 4.7, 4.0, 4.7]
  }, {
    name: 'Male householder',
    data: [15.8, 16.1, 16.4, 15.9, 15.7, 14.9, 13.1, 12.4, 12.7, 11.5, 11.4]
  }, {
    name: 'Female householder',
    data: [31.7, 31.2, 30.9, 30.6, 30.6, 28.2, 26.6, 25.7, 24.9, 22.2, 23.4]
  }, {
    name: 'All families',
    data: [11.8, 11.8, 11.8, 11.2, 11.6, 10.4, 9.8, 9.3, 9.0, 7.8, 8.7]
  }]
});

responsive: {
  rules: [{
    condition: {
      maxWidth: 500
    },
    chartOptions: {
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
      }
    }
  }]
}
