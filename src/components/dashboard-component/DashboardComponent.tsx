import React from 'react'
import Jumbotron from '../../utils/jumbotron/Jumbotron'
import Row from '../../utils/row/Row'
import Card from '../../utils/card/Card'
import Wrapper from '../../utils/Wrapper'


export class DashboardComponent extends React.Component <any, any> {


    render(){
        return (
            <Wrapper>
            <Jumbotron id = 'dashboard'>
                <Row className = 'wrapper'>
                    <Card cardTitle = 'Contribution' cardProperties = ' col-sm-4'>
                        <h1>Rwf ...</h1>
                    </Card>
                    <Card cardTitle = 'Loans' cardProperties = ' col-sm-4'>
                        <h1>Rwf ...</h1>
                    </Card>
                    <Card cardTitle = 'Fines' cardProperties = ' col-sm-4'>
                        <h1>Rwf ...</h1>
                    </Card>
                    </Row>
                    <br/>
                    <Row className = 'wrapper'>
                    <Card cardTitle = 'Repayments' cardProperties = ' col-sm-4'>
                        <h1>Rwf ...</h1>
                    </Card>
                    <Card cardTitle = 'Documents' cardProperties = ' col-sm-4'>
                        <h1>Docs</h1>
                    </Card>
                    <Card cardTitle = 'Profile' cardProperties = ' col-sm-4'>
                        <h1>Profile</h1>
                    </Card>
                </Row>
            </Jumbotron>
            </Wrapper>
        )
    }
}