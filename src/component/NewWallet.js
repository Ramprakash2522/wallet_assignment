import React, { Component } from 'react';

class NewWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container-fluid pt-3">
                <div className="row mt-2">
                    <div className="col-sm-3 text-right">Name</div>
                    <div className="col-sm-6">
                        <input className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-3 text-right">Phone</div>
                    <div className="col-sm-6">
                        <input className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-3 text-right">Amount (RS)</div>
                    <div className="col-sm-6">
                        <input className="form-control" />
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-info">SUBMIT</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewWallet;