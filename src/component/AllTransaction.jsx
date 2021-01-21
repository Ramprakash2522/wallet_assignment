import React, { Component } from 'react';

class AllTranscation extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }

    }
    render(){
        return(
            <div>
                <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount (Rs)</th>
                            <th>Balance (Rs)</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr>
                            <td>Name1</td>
                            <td>12 Jan, 5 pm</td>
                            <td>+125</td>
                            <td>225</td>
                        </tr>
                        <tr>
                        <td>Name1</td>
                            <td>12 Jan, 5 pm</td>
                            <td>+125</td>
                            <td>225</td>
                        </tr>
                        <tr>
                        <td>Name1</td>
                            <td>12 Jan, 5 pm</td>
                            <td>+125</td>
                            <td>225</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
export default AllTranscation;