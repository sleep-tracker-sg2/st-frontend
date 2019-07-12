//import sleepActions, daily, weekly etc stats here
import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'


import DailyStat from './dailyStats'
import WeeklyStat from './weeklyStats';
import MonthlyStat from './monthlyStats';
import YearlyStat from './yearlyStats';
// import {Pie} from 'react-chartjs-2';


import { connect } from 'react-redux'
import { getStats } from '../../store/actions/profile'


class Main extends Component {


    // componentDidMount() {
    //     const jwtDecode =  require('jwt-decode')
    //     // this.props.getStats(userId)
    //     const token = localStorage.getItem('token')
    //     const decode = jwtDecode(token)
    //     this.props.user.username = decode.username
    //     this.props.user.id = decode.subject
    //     console.log(this.props.user)

    // }


    render() {

        const data = {
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                ]}]
        }

        return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Jumbotron className="jumboTron">
                            <h1>Hi, Kelly!</h1>
                            <h2>Welcome to SleepTracker</h2>
                            <hr/>
                            <p>Use this dashboard to track and monitor your sleep schedule.
                                We have conveniently provided quick links to a variety
                                of sleep tracking information, as well as easy access to 
                                tools to input your daily activity.
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>


                <Row>
                    <Col>
                      <Button>Add Sleep</Button>
                    </Col>
                    <Col>
                       <Button>Show All Stats</Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <DailyStat sum={9} difference={5}/>
                    </Col>
                    <Col>
                        <WeeklyStat sum={9} difference={3} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MonthlyStat sum={9} difference={5}/>
                    </Col>
                    <Col>
                        <YearlyStat sum={9} difference={5}/>
                    </Col>
               </Row>
            </Container>
         </div>
        )
    }
}

const mapStateToProps = ({ loggedIn, stats, user}) => ({
    stats,
    loggedIn,
    user
})

export default connect(mapStateToProps, {getStats})(Main)