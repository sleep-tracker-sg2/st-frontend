import React, { Component } from "react";
import { connect } from "react-redux";

import {sleepTimes } from "./sleepCalc";
import { getAllYear } from "../store/actions/profile.js";

class Recommendation extends Component {
  componentDidMount() {
    this.props.getAllYear(this.props.id);
  }

  maxMood = moods => Math.max(...moods);

  sleepArr = numArray => {
    
    let sleepModes = [],
      count = [],
      i,
      number,
      maxIndex = 0;

    for (i = 0; i < numArray.length; i += 1) {
      number = numArray[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
        maxIndex = count[number];
      }
    }

    for (i in count)
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          sleepModes.push(Number(i));
        }
      }

    return sleepModes;
  };

  render() {
    const moods = this.props.yearlyData.map(
      day => day.day_emotion + day.sleep_emotion
    );
    const moodSolids = this.maxMood(moods);
    const bestSleep = this.props.yearlyData
      .filter(day => day.day_emotion + day.sleep_emotion === moodSolids)
      .map(day =>
        parseInt(
         sleepTimes(day.start_sleep_time, day.end_sleep_time).split(":")[0],
          10
        )
      );
    return (
      <div>
        {this.sleepArr(bestSleep).length === 1
          ? `Your mood is best when you get ${this.sleepArr(
              bestSleep
            )} hours.`
          : `Your mood scores are higher when you sleep either ${
              this.sleepArr(bestSleep)[0]
            } or ${this.sleepArr(bestSleep)[1]} hours.`}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.auth.user.subject,
    yearlyData: state.profile.yearlyData
  };
};

export default connect(
  mapStateToProps,
  { getAllYear }
)(Recommendation);
