import React from 'react'
import Jumbotron from '../../utils/jumbotron/Jumbotron'
import Card from '../../utils/card/Card'

interface IMemberDetailsProps {
    member: any
}

export class MemberDetailsComponent extends React.Component<IMemberDetailsProps, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        if (this.props.member != null) {
            return (
                <Jumbotron>
                    <Card>
                        <p><strong>First name:</strong> {' ' + this.props.member.first_name}</p>
                        <p><strong>Last name:</strong> {' ' + this.props.member.last_name}</p>
                        <p><strong>Email:</strong> {' ' + this.props.member.email}</p>
                        <p><strong>Phone:</strong> {' ' + this.props.member.phone}</p>
                        <p><strong>Address:</strong> {' ' + this.props.member.address}</p>
                        <p><strong>Total Contributions:</strong> {' ' + this.props.member.contribution}</p>
                        <p><strong>Total fines paid:</strong> {' ' + this.props.member.fine}</p>
                        <p><strong>Loans taken:</strong> {' ' + this.props.member.loans}</p>
                        <p><strong>Current Loan balance:</strong> {' ' + this.props.member.loan_balance}</p>
                    </Card>
                </Jumbotron>
            )
        } else {
            return (
                <>
                    <h1>No data to display</h1>
                </>
            )
        }

    }
}