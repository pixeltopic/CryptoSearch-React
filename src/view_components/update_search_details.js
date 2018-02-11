import React from "react";
import { Panel, Label, Alert } from "react-bootstrap";
import "./update_search_details.css";

const UpdateSearchDetails = (props) => {

    if (!props.searchDetailData) {
        return <div />
    }

    if (props.searchDetailData === -1) {
        return (
            <Alert bsStyle="warning">
                <strong>Whoops.</strong> Nothing found for current coin name or symbol! 
                You might want to change your search or refresh the search.</Alert>
        );
    }

    const coinName = props.searchDetailData.coinName;
    const exchangeInput = props.searchDetailData.exchangeInput;
    const curInput = props.searchDetailData.curInput;

    return (
        <div className="Search-Detail-Style">
            <Panel bsStyle="info">
                <Panel.Body>
                    You are viewing <Label bsStyle="primary">{coinName}'s</Label>{' '} stats from the <Label bsStyle="info">{exchangeInput}</Label>{' '} exchange in <Label bsStyle="success">{curInput}</Label>{' '}.
                </Panel.Body>
            </Panel>
        </div>
    );
}

export default UpdateSearchDetails;