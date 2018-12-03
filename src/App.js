import React, { Component } from 'react';
import Header from './header.js';
import TopicList from './topicList.js';
import TopicInfo from './topicInfo.js'
import data from './result.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: data.topics[0]
    }

    this.changeTopic = this.changeTopic.bind(this);
  }

  changeTopic(topic) {
    this.setState({currentTopic: topic});
  }

  render() {
    return (
      <div className="App">
        <Header className="header"/>
        <div className="container-fluid">
        	<div className="row">
	        	<div className="col-sm-3">
	        		<TopicList className="topic-list" data={data} changeTopic={this.changeTopic}/>
	        	</div>
	        	<div className="col-lg-9">
              <TopicInfo className="topicInfo" topic={this.state.currentTopic}/>
	        	</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
