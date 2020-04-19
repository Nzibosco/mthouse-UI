import React from 'react'
import { Link } from 'react-router-dom'
import MiniDrawer from './Nav'

interface INavProps {
}

export class NavbarComponent extends React.Component<INavProps, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        if(true){
            return (
                <>
                <MiniDrawer/>
                </>
            )
        } else {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <br />
                    <br />
                    <div className="justify-content-center">
                        <a href="#" className="navbar-brand">MT House</a>
                        <div className="member-account">
                            <p>Account</p>
                        </div>
                    </div>
                    <Link to = "/register" id = 'register'>Register</Link>
                    <Link to = "/login" id = 'login'>Login</Link>
                    <Link to = "/logout" id = 'logout'>Logout</Link>


                </nav>
                <nav className="navbar navbar-expand-lg navbar-light justify-content-center">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" id="nav-list">
                            <li className="nav-item">
                                <Link to="/members">Members</Link></li>
                            <li className="nav-item">
                                <Link to="/contributions" >Contributions</Link></li>
                            <li className="nav-item">
                                <Link to="/loans" >Loans</Link></li>
                            <li className="nav-item">
                                <Link to="/fine" >Fine</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/repayment" >Repayment</Link></li>
                            <li className="nav-item">
                                <Link to="/repayment" >Documents</Link></li>
                            <li className="nav-item">
                                <Link to="/accounting" >Accounting</Link></li>
                            <li className="nav-item">
                                <Link to="/meeting" >Meetings</Link></li>
                            <li className="nav-item">
                                <Link to="" >Admin</Link></li>
                        </ul>
                    </div>


                </nav>
            </>
        )
        }
    }
}