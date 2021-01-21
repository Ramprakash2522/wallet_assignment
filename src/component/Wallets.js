import React, { Component } from 'react';

class Wallets extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>User id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Balance (Rs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Usr1</td>
                            <td>Name1</td>
                            <td>9988776655</td>
                            <td>765.43</td>
                        </tr>
                        <tr>
                            <td>Usr1</td>
                            <td>Name1</td>
                            <td>9988776655</td>
                            <td>765.43</td>
                        </tr>
                        <tr>
                            <td>Usr1</td>
                            <td>Name1</td>
                            <td>9988776655</td>
                            <td>765.43</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Wallets;