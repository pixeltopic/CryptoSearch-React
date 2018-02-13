import React, { Component } from "react";
import { Table, Alert } from "react-bootstrap";

class UpdateStatDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statDetailData : null, 
            textColor: {color: "black"} 
        };
    }

    componentWillReceiveProps(newProps) {
        // will be called every time parent component has setState called to receive new props
        this.setState({statDetailData : newProps.statDetailData});
        if (newProps.statDetailData) {
            const rawChangeTest = newProps.statDetailData.RAWCHANGEPCT24HOUR;
            rawChangeTest < 0 ? this.setState({ textColor : { color : "red" } }) : this.setState({ textColor : { color : "green" } });
        }
    }

    render() {
        const statDetailData = this.state.statDetailData;
        if (!statDetailData) {
            return <div />
        }

        if (statDetailData === -1) {
            return (
                <Alert bsStyle="warning">
                    <strong>No Info Found...</strong> The exchange for your search parameters is nonexistent!</Alert>
            );
        }

        const price = `${statDetailData.PRICE}`;
        const change24hour = `${statDetailData.CHANGE24HOUR} (${statDetailData.CHANGEPCT24HOUR}%)`;
        const volume24hour = `${statDetailData.VOLUME24HOUR} (${statDetailData.VOLUME24HOURTO})`;
        const open24hour = `${statDetailData.OPEN24HOUR}`;
        const lowhigh24hour = `${statDetailData.LOW24HOUR} - ${statDetailData.HIGH24HOUR}`;
        
        let now = new Date();
        let timestamp = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} - ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`
        
        const timestamp_str = `${timestamp}`;

        

        return (
            <div>
                <Alert bsStyle="success"><strong>Success!</strong> Information retrieved.</Alert>
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
                            <td><div style={this.state.textColor}>{change24hour}</div></td>
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
}

export default UpdateStatDetails;