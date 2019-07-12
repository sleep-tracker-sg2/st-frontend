// import charts and times calculations, profile actions here
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button} from 'reactstrap';
import Weekly from './charts/weeklyChart';

import sleepImg from '../../images/z.png'


class WeeklyStat extends Component {

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
            
                       <Card   className="card__gutter">
                          <CardImg   />
                            <CardBody>
                                <CardTitle className="card__title"><img src={sleepImg}/>Weekly Sleep Stats</CardTitle>
                                <Weekly />
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button className="card__button" color="primary">More Info</Button>
                            </CardBody>
                        </Card>
                  
            
          </div>

         )
     }
}
export default WeeklyStat;