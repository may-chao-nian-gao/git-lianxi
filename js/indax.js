
    // //1.实例化对象
    // var mychart=echarts.init(document.querySelector(".pie"));
    // //2.指定配置项和数据
    // var option={
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: '{a} <br/>{b} : {c} ({d}%)'
    //       },
    //       series: [
    //         {
    //           name: 'Area Mode',
    //           type: 'pie',
    //           radius: [20, 140],
    //           center: ['75%', '50%'],
    //           roseType: 'area',
    //           itemStyle: {
    //             borderRadius: 5
    //           },
    //           data: [
    //             { value: 30, name: 'rose 1' },
    //             { value: 28, name: 'rose 2' },
    //             { value: 26, name: 'rose 3' },
    //             { value: 24, name: 'rose 4' },
    //             { value: 22, name: 'rose 5' },
    //             { value: 20, name: 'rose 6' },
    //             { value: 18, name: 'rose 7' },
    //             { value: 16, name: 'rose 8' }
    //           ]
    //         }
    //       ]
    // };
    // //3.配置项和数据给我们实例对象
    // mychart.setOption(option);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
