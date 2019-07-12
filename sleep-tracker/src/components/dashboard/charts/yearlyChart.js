import React, { Component } from "react";
import { connect } from "react-redux";
import { getYearly } from "../../store/actions/profile";

import yearlyCharts from "./charts/yearlyCharts";

class Yearly extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getYearly(this.props.id);
    }
  }

  render() {
    return (
      <yearlyCharts
        data={this.props.yearlyData}
        editSleep={this.props.editSleep}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    id: state.auth.user.subject,
    yearlyData: state.profile.yearlyData
  };
};

export default connect(
  mapStateToProps,
  { getYearly }
)(Yearly);
