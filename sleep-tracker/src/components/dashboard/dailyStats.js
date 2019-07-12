// import charts and times calculations, profile actions here
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button} from 'reactstrap';
import Daily from './charts/dailyChart'

import sleepImg from '../../images/z.png'
class DailyStat extends Component {

    state = {
        data: {
            date: '10212019'
        }
    }
   
    componentDidMount() {
        //this.props.getStats()
    }
     render(){
         return(
            <div>
                <Card  className="card__gutter">
                    <CardImg  />
                    <CardBody>
                        <CardTitle className="card__title"><img src={sleepImg}/>Daily Sleep Stats</CardTitle>

                        <Daily  data={this.state.data} sum={100} difference={33}/>

                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="card__button" color="primary">More Info</Button>
                    </CardBody>
                </Card>
          </div>

         )
     }
}
export default DailyStat;