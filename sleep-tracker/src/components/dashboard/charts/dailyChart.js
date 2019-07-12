import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import withWidth from "@material-ui/core/withWidth";
import { blue, yellow } from "@material-ui/core/colors";

class Daily extends Component{
    state={
        chartInfo:{
            labels: ['Sleep Time', 'Awake Time'],

            datasets: [
                {   
                    data: [this.props.sum, this.props.difference],
                    backgroundColor: [yellow[100], blue[200]]
                }
            ]
        }
    };
    render() {
        const {width, data} =this.props;
        
        return (
            <React.Fragment>
            <Pie 
                 data={this.state.chartInfo}
                height={400}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    title: {
                        display: true,
                        text: `Time Awake v Time Asleep for ${data.date}`,
                        fontSize: width === 'xs' ?12:18,
                        fontColor: '#E6E6E6'
                    }
                }} 
            />
        
            </React.Fragment>
        );
      }
   }    
export default withWidth()(Daily);
