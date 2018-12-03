import React, {Component} from 'react';
import { Bar, Scatter } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    topic:'City'
  }

  render(){
    return (
      <div className="chart">
        <Scatter
          data={this.state.chartData}
          width={500}
	        height={300}
          options={{
            title:{
              display:this.props.displayTitle,
              text: 'Question Score vs. Question Duration',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true
                }
            }]
            },
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default Chart;
