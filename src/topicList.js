import React, { Component } from 'react';
import './styles/index.css';
import Topic from './topic.js';

export default class TopicList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			topics: this.props.data.topics,
			search: "",
		};
	}

	handleChange(event) {
		let query = event.target.value.toLowerCase();
		let displayedTopics = this.props.data.topics.filter((t) => {
			let searchValue = t.name.toLowerCase();
			return searchValue.indexOf(query) !== -1;
		  })

		this.setState({topics: displayedTopics});
	}

	render() {
		const topic = this.state.topics.map((t, index) => (
			<Topic topic={t} key={index} changeTopic={this.props.changeTopic}/>
		));
		return(
			<div>
				<div className="search-container">
					<input
						type="text"
						placeholder="Search"
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div className="topic-list">
					<div className="container">{topic}</div>
				</div>
			</div>
		)
	}
}