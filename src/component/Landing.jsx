import React, { Component } from 'react';
import AddFund from './AddFund';
import AllTranscation from './AllTransaction';
import CheckBalance from './CheckBalance';
import NewWallet from './NewWallet';
import SpendFund from './SpendFund';
import Wallets from './Wallets';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: "all_wallet",
        }
    }
    handleSideNav = (text) => {
        this.setState({ activePage: text })
    }
    render() {
        const { activePage } = this.state;
        return (
            <div className="container mt-3 p-0" >
                <div className='bg-info text-center font-weight-bold p-1'>Personal Wallet UI</div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 bg-info p-0">
                            <div className={activePage === "all_wallet" ? "active-sidenav" : "sidenav"} onClick={() => this.handleSideNav('all_wallet')} >All Wallets</div>
                            <div className={activePage === "new_wallet" ? "active-sidenav" : "sidenav"} onClick={() => this.handleSideNav('new_wallet')} >New Wallet</div>
                            <div className={activePage === "check_balance" ? "active-sidenav" : "sidenav"} onClick={() => this.handleSideNav('check_balance')} >Check Balance</div>
                            <div className={activePage === "add_fund" ? "active-sidenav" : "sidenav"} onClick={() => this.handleSideNav('add_fund')} >Add Funds</div>
                            <div className={activePage === "spend_funds" ? "active-sidenav" : "sidenav"} onClick={() => this.handleSideNav('spend_funds')} >Spend Funds</div>
                            <div className={activePage === "all_transaction" ? "active-sidenav" : "sidenav"} onClick={() => this.handleSideNav('all_transaction')} >All Transactions</div>
                        </div>
                        <div className="col-sm-9">
                            {activePage === "all_wallet"&& <Wallets />}
                            {activePage === "new_wallet" &&<NewWallet />}
                            {activePage === "check_balance"&&<CheckBalance />}
                            {activePage === "add_fund" && <AddFund />}
                            {activePage === "spend_funds" && <SpendFund />}
                            {activePage === "all_transaction" && <AllTranscation />}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Landing;