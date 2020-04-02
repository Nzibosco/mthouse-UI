import React from 'react'

interface IMembersProps {
    members: any
}
export class MembersComponent extends React.Component<IMembersProps, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        if (this.props.members != null) {
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Names</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Contribution balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.members.map((member: any) => {
                                    return (
                                        <tr>
                                            <td>{member.id}</td>
                                            <td>{member.first_name + ' ' + member.last_name}</td>
                                            <td>{member.email}</td>
                                            <td>{member.phone}</td>
                                            <td>{member.address}</td>
                                            <td>{member.balance}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

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