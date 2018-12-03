import React, { Component } from 'react';
import './styles/index.css';
import scores from './scores.json';

export default class TopicList extends Component {
    render() {
        const { topic, changeTopic } = this.props;
        const difficulty = (topic.average_score / 10).toFixed(1)
        const difficultyColor = difficulty > 7 ? "#66bb6a" : difficulty > 4 ? "#ffca28" : "#ef5350";
        const not_zero = topic.questions.filter((q) => scores[q] !== undefined).length !== 0;
        return (
            not_zero &&
            <div className="topic" onClick={() => {changeTopic(topic)}}>
                <div className="card-topic-header">
                    <strong className="topic-title">{topic.name.toUpperCase()}</strong>
                </div>
                <div className="card-content">
                    <strong className="card-label"># OF QUESTIONS</strong>
                    <p className="card-text">{topic.questions.filter((q) => scores[q] !== undefined).length}</p>
                    <strong className="card-label">SCORE</strong>
                    <p className="card-text" style={{backgroundColor: difficultyColor, color: "white", fontWeight: 700}}>{difficulty}</p>
                </div>
            </div>
        )
    }
}