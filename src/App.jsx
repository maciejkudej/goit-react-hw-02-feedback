import React, { Component } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = e => {
    const name = e.target.name;
    this.setState(previousState => ({
      [name]: previousState[name] + 1,
    }));
  };

  totalStat = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  positivePercent = () => {
    return Math.round((this.state.good * 100) / this.totalStat());
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} addOne={this.changeState} />

        {this.totalStat() ? (
          <Statistics
            statistic={this.state}
            total={this.totalStat()}
            positive={this.positivePercent()}
          />
        ) : (
          <Notification message="No feedback yet, you can be the first one :)" />
        )}
      </Section>
    );
  }
}
