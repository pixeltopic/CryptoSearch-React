import React from "react";

const UpdateSearchDetails = (props) => {

    if (!props.searchDetailData) {
        return <div />
    }

    const coinName = props.searchDetailData.coinName;
    const exchangeInput = props.searchDetailData.exchangeInput;
    const curInput = props.searchDetailData.curInput;

    return (
        <div>
            You're viewing {coinName}'s stats from the {exchangeInput} exchange in {curInput}.
        </div>
    );
}

export default UpdateSearchDetails;