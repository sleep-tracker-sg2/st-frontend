import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import withWidth from "@material-ui/core/withWidth";

import { green } from "@material-ui/core/colors";

class WeeklyChart extends Component {
  state = {
    chartInfo: {
      labels: this.props.days,
      datasets: [
        {
          labels: "Hours Slept",
          // data: this.props.hours,
          data: [3,5,1,6,7,4],
          backgroundColor: "rgba(56, 142, 60, 0.1)",
          borderColor: green[600],
          lineTension: 0.2
        }
      ]
    }
  };
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Line
        data={this.state.chartInfo}
        height={400}
        options={{
          maintainAspectRatio: true,
          title: {
            display: true,
            text: "Hours Slept This Week",
            fontSize: this.props.width === "xs" ? 12 : 18,
            fontColor: "#E6E6E6"
          },

          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default withWidth()(WeeklyChart);
