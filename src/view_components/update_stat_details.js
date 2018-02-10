import React from "react";
import { Table } from 'react-bootstrap';

const UpdateStatDetails = (props) => {
    if (!props.statDetailData) {
        return <div />
    }

    const price = `${props.statDetailData.PRICE}`;
    const change24hour = `${props.statDetailData.CHANGE24HOUR} (${props.statDetailData.CHANGEPCT24HOUR}%)`;
    const volume24hour = `${props.statDetailData.VOLUME24HOUR} (${props.statDetailData.VOLUME24HOURTO})`;
    const open24hour = `${props.statDetailData.OPEN24HOUR}`;
    const lowhigh24hour = `${props.statDetailData.LOW24HOUR} - ${props.statDetailData.HIGH24HOUR}`;
    
    let now = new Date();
    let timestamp = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} - ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`
    
    const timestamp_str = `${timestamp}`;

    return (
        <div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th className="text-center">Type</th>
                        <th className="text-center">Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price Just Now</td>
                        <td>{price}</td>
                    </tr>
                    <tr>
                        <td>Change 24H</td>
                        <td>{change24hour}</td>
                    </tr>
                    <tr>
                        <td>Volume 24H</td>
                        <td>{volume24hour}</td>
                    </tr>
                    <tr>      
                        <td>Open24H</td>
                        <td>{open24hour}</td>
                    </tr>
                    <tr>      
                        <td>Low/High 24H</td>
                        <td>{lowhigh24hour}</td>
                    </tr>
                    <tr>      
                        <td>Timestamp</td>
                        <td>{timestamp_str}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default UpdateStatDetails;