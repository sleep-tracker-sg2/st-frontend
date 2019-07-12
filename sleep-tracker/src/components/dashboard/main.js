//import sleepActions, daily, weekly etc stats here
import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

import { connect } from 'react-redux'
import { getStats } from '../../store/actions/profile'

class Main extends Component {
  
    componentDidMount() {
        // this.props.getStats(userId)
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Hello, user</h1>
                            <p>Welcome to Sleep Tracker hope you can get better than me</p>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className='monthlyStat'>
                            <CardBody>
                                <CardTitle>Monthly Stats</CardTitle>
                                <CardText>Base on your current month you will need an average number of hours of sleep to be in a better mood</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='buttons'>
                            <Button color='secondary' block>Add New Sleep stats</Button>
                            <Button color='secondary' block>Show All Stats</Button>
                        </Card>
                    </Col>
                </Row>


            </Container>
        )
    }
}

const mapStateToProps = ({ loggedIn, stats}) => ({
    stats,
    loggedIn
})

export default connect(mapStateToProps, {getStats})(Main)