import React, { Component } from 'react';
import './styles/index.css';
import data from './data.json';
import Chart from './chart';
import duration from './duration.json';
import scores from './scores.json';

export default class TopicInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
      chartData:{}
    }
	}

	componentWillMount() {
	    this.getChartData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.topic !== prevProps.topic) {
			const data = this.props.topic.questions.map((q) => ({'x': duration[q], 'y': scores[q]}))
			console.log(data);
			this.setState({
	      chartData:{
	        labels: 'Scatter',
	        datasets:[
	          {
	            label:'Question',
							data: data,
	            backgroundColor:'rgba(255, 99, 132, 0.6)'
	          }
	        ]
	      }
	    });
		}
	}

	getChartData() {
			const data = this.props.topic.questions.map((q) => ({'x': duration[q], 'y': scores[q]}))
	    this.setState({
	      chartData:{
	        labels: 'Scatter',
	        datasets:[
	          {
	            label:'Question',
							data: data,
	            backgroundColor:'rgba(255, 99, 132, 0.6)',
	          }
	        ]
	      }
	    });
	  }

	render() {
		const { topic } = this.props;
		return (
			<div className="topic-info">
				<strong style={{fontSize: "28px", color: "#444444"}}>{topic.name.toUpperCase()}</strong>
				<strong style={{color: "#444444", display: "inherit"}}># OF QUESTIONS: {topic.questions.filter((q) => scores[q] !== undefined).length}</strong>
				<div className="chart-container">
					<Chart chartData={() => this.state.chartData} topic="Topics" legendPosition="bottom"/>
				</div>
			</div>

		);
	}
}
