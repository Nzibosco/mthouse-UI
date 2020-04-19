import React from 'react'
import Card from '../../utils/card/Card';
import Jumbotron from '../../utils/jumbotron/Jumbotron';

interface IMembersProps {
    getMembers: () => void,
    members: any,
    membersMessage: string
}

export class MembersComponent extends React.Component<IMembersProps, any> {
    constructor(props: any) {
        super(props)
    }

    componentDidMount = () => {
        if (this.props.members.length === 0) {
            this.props.getMembers();
        }
    }

    render() {
        if (this.props.members != null) {
            return (
                <Jumbotron className = 'wrapper'>
                    <div className = 'wrapper'>
                    <Card id='members-table' cardProperties = ''>
                        <table className='table table-dark' id='members'>
                            <thead>
                                <tr id = 'member-tableHead'>
                                    <th scope="col">Id</th>
                                    <th scope="col">Names</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Contribution balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.members.map((member: any) => {
                                        return (
                                            <tr>
                                                <td scope="row">{member.id}</td>
                                                <td>{member.first_name + ' ' + member.last_name}</td>
                                                <td>{member.email}</td>
                                                <td>{member.phone}</td>
                                                <td>{member.address}</td>
                                                <td>{member.initial_contribution}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Card>
                    <h4 className='text-danger wrapper'>{this.props.membersMessage}</h4>
                    </div>
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