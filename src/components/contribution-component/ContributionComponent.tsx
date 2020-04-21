import React from 'react'
import Jumbotron from '../../utils/jumbotron/Jumbotron'
import AddContribution from './helper-functions/AddContribution';
import Wrapper from '../../utils/Wrapper';
import Row from '../../utils/row/Row';
import ContributionHistory from './helper-functions/ContributionHistory';
import Card from '../../utils/card/Card';


// props to access contributions data
interface IContributionProps {
    contributions: any,
    member: any
}


export class ContributionComponent extends React.Component<IContributionProps, any> {

    constructor(props: any) {
        super(props)
    }

    handleClick = () => {
        alert('hello');
        console.log('Alert not working');
        
    }


    render() {
        return (
            <Wrapper>
            <Jumbotron className ='wrapper'>
                <Row className ='wrapper'>
                </Row>
                <br/> <br/>
                <Row className ='wrapper'>             
                    <Card cardTitle = 'Your contribution History' cardProperties = ' col-sm-12'>
                        <small>Click the button below to add new contribution</small>
                    <AddContribution handleClick = {this.handleClick}/>
                    <ContributionHistory/>
                    </Card>
                </Row>
            </Jumbotron>
            </Wrapper>
        )
    }

}