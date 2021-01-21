import React, { Component } from 'react';

class AddFund extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-sm-2">User</div>
                    <div className="col-sm-6">
                        <select class="form-select form-control" aria-label="Default select example">
                            <option selected></option>
                            <option value="1">Name 1</option>
                            <option value="2">Name 2</option>
                            <option value="3">Name 3</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-2"> Amount (Rs)</div>
                    <div className="col-sm-6 text-right ">
                        <input className="form-control" />
                    </div>
                    <div className="col-sm-4">
                        <button className="btn btn-info">Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default AddFund;