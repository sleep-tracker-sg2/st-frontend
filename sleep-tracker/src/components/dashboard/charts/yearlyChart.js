import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import withWidth from "@material-ui/core/withWidth";
import { blue } from "@material-ui/core/colors";

const daysMonth = (month, year) => {
  const numDays = new Date(year, month, 0).getDate();

  let array = [];

  for (let i = 1; i < numDays + 1; i++) {
    array.push(i);
  }
  return array;
};

class YearlyChart extends Component {
  state = {
   chartInfo: {
      label: "Yearly",
      labels: this.props.days,
      datasets: [
        {
          labels: "Yearly Hours Slept",
          data: [5,3,5,6,8,3,2,4,8,6,5,6,4,5,7,8,6,5,3,4,0],
          // data: this.props.hours,
          backgroundColor: "rgba(33, 150, 243, 0.25)",
          borderColor: blue[500],
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
            text: "Hours Slept This Year",
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

export default withWidth()(YearlyChart);